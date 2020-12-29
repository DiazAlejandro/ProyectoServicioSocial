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

function plugin1(){
    

    const db1 = firebase.database();
    coleccionAlumnos = db1.ref().child('alumno');
    //bodyAlumno=$('#bodyAlumno').val();
    //console.log("xxxxxx "+bodyAlumno);
    var dataSet = [];

    
        var table = $('#tablaAlumnos').DataTable({
            pageLength : 10,
            lengthMenu : [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
            data: dataSet,
            columnDefs: [
                {
                    targets: [0],
                    visible: true,
                },
                {
                    targets: -1,
                    defaultContent: "<div>hola</div>"
                }
            ],
            language: {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                },
                "buttons": {
                    "copy": "Copiar",
                    "colvis": "Visibilidad"
                }
            }

        });

        var ht = `<div class="switch-container">
        <input type="checkbox" class ="switchB" id="datos.child("studentNoctrl").val()" checked>
         <label class="lbl" for="datos.child("studentNoctrl").val()" ></label>
        <label class="lbl1" for="datos.child("studentNoctrl").val()"></label>
        </div></td>`;

        coleccionAlumnos.on('child_added', datos =>{
            var str = "Kardex Calificaciones";
            var docEv = datos.child("documentoEvidencia").val();
            var documentoEvidencia1;
            var noCo = datos.child("studentNoctrl").val();
            var valiEvidencia = datos.child("validacionEvidencia").val();
            //console.log(noCo+" "+valiEvidencia);
            var id=datos.key;
            var x=id+" ";
            //var id=datos.child("id").val();
            //console.log(x);
            var boton;
  
            if (docEv == "Sin Añadir" || docEv == null){
                documentoEvidencia1 = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                boton = `No hay Evidencia aun`; 
    
            }else{
                documentoEvidencia1 = str.link(docEv); //.link convierte en enlace el dato recuperado de la BD
                //console.log( "ENTROOOO" + docEv);
                if(valiEvidencia == null ||valiEvidencia !="aceptado"){
                    boton = `<div class="switch-container">
                    <input type="checkbox" onclick="aceptar(this)" class ="switchB" id=${id} >
                    <label class="lbl" for="` + id + `" ></label>
                    <label class="lbl1" for="` +id + `"></label>
                    </div></td>`; 
    
                }else{
                    boton = `<div class="switch-container">
                    <input type="checkbox" onclick="aceptar(this)" class ="switchB" id=${id} checked >
                    <label class="lbl" for="` + id + `" ></label>
                    <label class="lbl1" for="` + id + `"></label>
                    </div></td>`; 
                }  
            };

            dataSet = [datos.child("studentNoctrl").val(),
             datos.child("studentApellidos").val(),
              datos.child("studentName").val(),
               datos.child("studentCarrera").val(),
               documentoEvidencia1, 
                boton
            ];
            table.rows.add([dataSet]).draw();
        })
};

function mostrarAlumnos({documentoSolicitud, studentActcomplementaria, studentApellidos, studentCarrera, studentDependencia,
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

function aceptar(comp,noCo) {
    var cambio="aceptado";
    var id = comp.id;
    if(id == ''){
        id = coleccionAlumnos.push().key;
    }  

    coleccionAlumnos.on('child_added', datos =>{
        var idP=datos.key;
        if(idP==id){
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
            if(valiEvidencia=="aceptado"){cambio="rechazado"}

            data={studentActcomplementaria:complementaria,
                documentoEvidencia:docEvidencia,
                studentApellidos:apellidos,
                studentCarrera:carrera,
                studentDependencia:dependencia,
                studentDiscapacidad:discapacidad,
                studentGenero:genero,
                studentLengua:lengua,
                studentName:nombre,
                studentNoctrl:noCo,
                studentPeriodo:periodo,
                validacionEvidencia:cambio
            }
        }
    })
    actualizacionData={};
    actualizacionData[`/${id}`]=data;
    coleccionAlumnos.update(actualizacionData);
} 

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