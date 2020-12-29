window.onload = function () {
    validar();
}

function logoutAdmin() {
    firebase.auth().signOut().then(function () {
        window.location.replace("/index.html");
    }).catch(function (error) {
        // An error happened.
    });
}

/* Formatting function for row details - modify as you need */
function format ( d ) {
    
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Solicitud Servicio Social:</td>'+
            '<td>'+d[7]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Carta Compromiso:</td>'+
            '<td>'+d[8]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Carta de Asignación:</td>'+
            '<td>'+d[9]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Tarjeta de Control:</td>'+
            '<td>'+d[10]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Reporte Bimestral:</td>'+
            '<td>'+d[11]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Formato de Evaluación:</td>'+
            '<td>'+d[12]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Formato de Autoevaluación:</td>'+
            '<td>'+d[13]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Formato Ev. del Prestador:</td>'+
            '<td>'+d[14]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Constancia de Terminación:</td>'+
            '<td>'+d[15]+'</td>'+
        '</tr>'+
    '</table>';

    
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

function aceptar(comp, noCo) {
    var cambio = "aceptado";
    var id = comp.id;
    if (id == '') {
        id = coleccionAlumnos.push().key;
    }

    coleccionAlumnos.on('child_added', datos => {
        var idP = datos.key;
        if (idP == id) {
            var docAutoEv = datos.child("documentoAutoEv").val();
            var docAutoEv = datos.child("documentoCartaAsignacion").val();
            var docEv = datos.child("documentoEvidencia").val();
            var docAutoEv = datos.child("documentoCartaAsignacion").val();
            var docAutoEv = datos.child("documentoCartaAsignacion").val();
            var docAutoEv = datos.child("documentoCartaAsignacion").val();
            var docAutoEv = datos.child("documentoCartaAsignacion").val();
            var docAutoEv = datos.child("documentoCartaAsignacion").val();
            var docEvidencia = datos.child("documentoEvidencia").val();
            var carrera = datos.child("studentCarrera").val();
            var periodo = datos.child("studentPeriodo").val();
            var nombre = datos.child("studentName").val();
            var lengua = datos.child("studentLengua").val();
            var genero = datos.child("studentGenero").val();
            var discapacidad = datos.child("studentDiscapacidad").val();
            var dependencia = datos.child("studentDependencia").val();
            var apellidos = datos.child("studentApellidos").val();
            var complementaria = datos.child("studentActcomplementaria").val();
            var noCo = datos.child("studentNoctrl").val();
            var valiEvidencia = datos.child("validacionEvidencia").val();
            if (valiEvidencia == "aceptado") { cambio = "rechazado" }

            data = {
                studentActcomplementaria: complementaria,
                documentoEvidencia: docEvidencia,
                studentApellidos: apellidos,
                studentCarrera: carrera,
                studentDependencia: dependencia,
                studentDiscapacidad: discapacidad,
                studentGenero: genero,
                studentLengua: lengua,
                studentName: nombre,
                studentNoctrl: noCo,
                studentPeriodo: periodo,
                validacionEvidencia: cambio
            }
        }
    })
    actualizacionData = {};
    actualizacionData[`/${id}`] = data;
    coleccionAlumnos.update(actualizacionData);
}

function validar() {
    var config = {
        apiKey: "AIzaSyBjAqwgBh893FPDFLg1PEypTp2_e_Uh2qA",
        authDomain: "servicio-social-d5a95.firebaseapp.com",
        databaseURL: "https://servicio-social-d5a95-default-rtdb.firebaseio.com/",
        projectId: "servicio-social-d5a95",
        storageBucket: "servicio-social-d5a95.appspot.com",
        messagingSenderId: "302681815081",
        appId: "1:302681815081:web:f6649140f3fee89acb4438",
        measurementId: "G-N4860PEFDP"
    };

    firebase.initializeApp(config);
    firebase.analytics();
    firebase.auth().onAuthStateChanged(function (user) {
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