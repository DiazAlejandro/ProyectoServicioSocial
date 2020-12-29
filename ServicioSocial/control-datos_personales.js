window.onload = function(){    
    validar();
}

function logoutAdmin(){
    firebase.auth().signOut().then(function() {
        location.replace("/login.html");
    }).catch(function(error) {
    // An error happened.
    });     
}

function plugin1() {


    const db1 = firebase.database();
    coleccionAlumnos = db1.ref().child('alumno');
    //bodyAlumno=$('#bodyAlumno').val();
    //console.log("xxxxxx "+bodyAlumno);
    var dataSet = [];

    var table = $('#tablaAlumnos').DataTable( {
        
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "datas":           null,
                "defaultContent": 'sad'
            },
            { "datas": "NoControl" }, 
            { "datas": "Apellidos" },
            { "datas": "Nombres" },
            { "datas": "Dependencia" },
            { "datas": "Carrera" },
            { "datas": "Teléfono" }
            
        ],
        "order": [[1, 'asc']]
    } );

    coleccionAlumnos.on('child_added', datos => {

        
        var ev = datos.child("validacionEvidencia").val();


        var documentoSol = "Solicitud de Servicio";
        var documentoSol1 = datos.child("documentoSolicitud").val();

        var documentoCartaComp = "Carta de compromiso";
        var documentoCartaComp1 = datos.child("documentoCartaCompromiso").val();

        var doumentoCartaAsig = "Carta de Asignación";
        var doumentoCartaAsig1 = datos.child("documentoCartaAsignacion").val();

        var tarjetaControl = "Tarjeta de Control";
        var tarjetaControl1 = datos.child("documentoTarjetaCtrl").val();

        var reporteBimestral = "Reporte Bimestral";
        var reporteBimestral1 = datos.child("documentoReporteB").val();

        var formatoEvaluacion = "Formato de Evaluación";
        var formatoEvaluacion1 = datos.child("documentoEvaluacion").val();

        var formatoAutoEv = "Formato de Autoevaluación";
        var formatoAutoEv1 = datos.child("documentoAutoEv").val();

        var formatoEvPrestador = "Formato Ev del Prestador";
        var formatoEvPrestador1 = datos.child("documentoEvPrestador").val();

        var constanciaTerm = "Constancia de Terminación";
        var constanciaTerm1 = datos.child("documentoConstancia").val();



        if (ev == "aceptado") {
            console.log("HAY USUARIOS ACEPTADOSSS");
            
            if (documentoSol1 == "Sin Añadir" || documentoSol1 == null){
                documentoSol = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                documentoSol = documentoSol.link(documentoSol1);

            }

            if (documentoCartaComp1 == "Sin Añadir" || documentoCartaComp1 == null){
                documentoCartaComp = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                documentoCartaComp = documentoCartaComp.link(documentoCartaComp1);

            }

            if (doumentoCartaAsig1 == "Sin Añadir" || doumentoCartaAsig1 == null){
                doumentoCartaAsig = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                doumentoCartaAsig = doumentoCartaAsig.link(doumentoCartaAsig1);

            }

            if (tarjetaControl1 == "Sin Añadir" || tarjetaControl1 == null){
                tarjetaControl = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                tarjetaControl = tarjetaControl.link(tarjetaControl1);

            }

            if (reporteBimestral1 == "Sin Añadir" || reporteBimestral1 == null){
                reporteBimestral = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                reporteBimestral = reporteBimestral.link(reporteBimestral1);

            }

            if (formatoEvaluacion1 == "Sin Añadir" || formatoEvaluacion1 == null){
                formatoEvaluacion = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                formatoEvaluacion = formatoEvaluacion.link(formatoEvaluacion1);

            }

            if (formatoAutoEv1 == "Sin Añadir" || formatoAutoEv1 == null){
                formatoAutoEv = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                formatoAutoEv = formatoAutoEv.link(formatoAutoEv1);

            }

            if (formatoEvPrestador1 == "Sin Añadir" || formatoEvPrestador1 == null){
                formatoEvPrestador = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                formatoEvPrestador = formatoEvPrestador.link(formatoEvPrestador1);

            }

            if (constanciaTerm1 == "Sin Añadir" || constanciaTerm1 == null){
                constanciaTerm = "Sin Añadir";    //Esto aparece en HTML cuando no hay documento  
            }else{
                constanciaTerm = constanciaTerm.link(constanciaTerm1);

            };


            

            dataSet = ["",
            datos.child("studentNoctrl").val(),
            datos.child("studentApellidos").val(),
            datos.child("studentName").val(),
            datos.child("studentDependencia").val(),
            datos.child("studentCarrera").val(),
            datos.child("studentTelefono").val(),
            documentoSol,
            documentoCartaComp,
            doumentoCartaAsig,
            tarjetaControl,
            reporteBimestral,
            formatoEvaluacion,
            formatoAutoEv,
            formatoEvPrestador,
            constanciaTerm
            ];


            table.rows.add([dataSet]).draw();

        } 


    })


    
     
    // Add event listener for opening and closing details
    $('#tablaAlumnos tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
} ;



function mostrarAlumnos({ documentoSolicitud, studentActcomplementaria, studentApellidos, studentCarrera, studentDependencia,
    studentDiscapacidad, studentGenero, studentLengua, studentName, studentNoctrl, studentPeriodo }) {
    return `
    <td>${studentNoctrl}</td>
    <td>${studentApellidos}</td>
    <td>${studentName}</td>
    <td>${studentCarrera}</td>
    <td><a href="${documentoSolicitud}" target="_blank">${documentoSolicitud}</a></td>
    <td><div class="switch-container">
            <input type="checkbox" class ="switchB" id="${studentNoctrl}" onclick="aceptar(this)" checked>
             <label class="lbl" for="${studentNoctrl}" ></label>
            <label class="lbl1" for="${studentNoctrl}"></label>
            </div></td>`
};


function validar (){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // El usuario está logueado, realiza acciones aquí
            plugin1();
          console.log("Loggeado");
        } else {
             console.log("usuario nullo");
             alert("Usuario No Autentificado, Inicie Sesión");
             location.replace("/login.html");
        }
      });
}