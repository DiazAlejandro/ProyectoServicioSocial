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
            var str = "Telefono";
            var tel = datos.child("studentTelefono").val();
            var whatsapp;
            var link = "https://web.whatsapp.com/send?phone=52"
            whatsapp = str.link(link+tel)
            var noCo = datos.child("studentNoctrl").val();
            var valiEvidencia = datos.child("validacionEvidencia").val();
            //console.log(noCo+" "+valiEvidencia);
            var id=datos.key;
            var x=id+" ";
            //var id=datos.child("id").val();
            //console.log(x);

            dataSet = [datos.child("studentNoctrl").val(),
             datos.child("studentApellidos").val(),
              datos.child("studentName").val(),
               datos.child("studentCarrera").val(),
                datos.child("studentSemestre").val(),
                 datos.child("studentDireccion").val(),
                  datos.child("studentTelefono").val(),
                  whatsapp,
            ];
            table.rows.add([dataSet]).draw();
        })
};

function mostrarAlumnos({documentoSolicitud, studentActcomplementaria, studentApellidos, studentCarrera, studentDependencia,
    studentDiscapacidad, studentGenero, studentLengua, studentName, studentNoctrl, studentPeriodo,
    studentSemestre, studentTelefono}) {
    return `
    <td>${studentNoctrl}</td>
    <td>${studentApellidos}</td>
    <td>${studentName}</td>
    <td>${studentCarrera}</td>
    <td>${studentSemestre}</td>
    <td>${studentDireccion}</td>
    <td>${studentTelefono}</td>
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