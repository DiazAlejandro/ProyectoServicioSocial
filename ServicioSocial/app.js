function registrarAlumno(){
    var name = document.getElementById('name').value;
    var apell = document.getElementById('apell').value;
    var carrera = document.getElementById('carrera').value;
    var noctrl = document.getElementById('noctrl').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        //alert("Alumno Registrado");
        var id = firebase.auth().currentUser.uid;
        firebase.database().ref('alumno/'+id).set({
            studentName:name,
            apellidos:apell,
            studentCarrera:carrera,
            studentNoctrl:noctrl,
            documento1:"Sin Añadir",
            documento2:"Sin Añadir",
            documento3:"Sin Añadir",
        });
    }).catch(function(error){
        //  alert("Datos Incompletos");
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
        console.log(errorCode);
        console.log(errorMessage);
    });
    //console.log(email+password);
}

function loginAlumno(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
        var id = firebase.auth().currentUser.uid;
        var userId = localStorage.getItem('id');
        
        window.location.replace("/user_0.html");
        localStorage.setItem('id',id);
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
        alert("Usuario No Registrado - Verifique sus Datos");
        console.log(errorCode);
        console.log(errorMessage);
    });
}

//Cerrar la sesión 
function logoutAlumno(){
    firebase.auth().signOut().then(function() {
        window.location.replace("/index.html");
    }).catch(function(error) {
    // An error happened.
    });     
}

//Cargar la información del usuario de acuerdo al id de su logeo
function mostrarInformacion(){
    var userId = localStorage.getItem('id');
        firebase.database().ref('alumno/'+userId).once('value').then(function(snapshot){
            var str = "Kardex Calificaciones";
            var nombre = (snapshot.val() && snapshot.val().studentName);
            var apell = (snapshot.val() && snapshot.val().studentApellidos);
            var noControl = (snapshot.val() && snapshot.val().studentNoctrl);
            var carrera = (snapshot.val() && snapshot.val().studentCarrera);
            var revEvidencia = (snapshot.val() && snapshot.val().validacionEvidencia);

                //Recupera el enlace que se encuentra en la BD
                var docEv = (snapshot.val() && snapshot.val().documentoEvidencia);
            var documentoEvidencia; //Variable que se mostrará en el HTML
            if (docEv == "Sin Añadir"){
                documentoEvidencia = "Sin añadir";    //Esto aparece en HTML cuando no hay documento       
            }else{
                documentoEvidencia = str.link(docEv); //.link convierte en enlace el dato recuperado de la BD
            }
            //document.getElementById('idEtiquetaAmostrarEnHTML').innerHTML = varible;
            document.getElementById('nombre').innerHTML = nombre;
            document.getElementById('apellido').innerHTML = apell;
            document.getElementById('carrera').innerHTML = carrera;
            document.getElementById('noctrl').innerHTML = noControl;
            document.getElementById('evidencia').innerHTML = documentoEvidencia;
            document.getElementById('revisionEvidencia').innerHTML = revEvidencia;   
            
            if (revEvidencia == "Pendiente de Revisión"){
                mostrarElementos();
                consultarDocumentos();
            }
        });
}

function mostrarElementos(){
    document.getElementById('accesoDocumentos').style.display = 'block';
}

function consultarDocumentos(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).once('value').then(function(snapshot){
        var strSol = "Solicitud Serv. Social";
        var docSol = (snapshot.val() && snapshot.val().documentoSolitud);
        var documentoSol; //Variable que se mostrará en el HTML
            if (docSol == "Sin Añadir" || docSol == "undefined"){
                documentoSol = "Sin añadir";    //Esto aparece en HTML cuando no hay documento       
            }else{
                documentoSol = strSol.link(docSol); //.link convierte en enlace el dato recuperado de la BD
            }
        document.getElementById('solicitud').innerHTML = documentoSol;
    });

}
//Llamada automática, esta funcion permite que se ejecute dentro del 
//archivo html sin necesidad de tener un evento de tipo onClick().
window.onload = function(){
    mostrarInformacion();
}

//Funciones encargadas de Guardar y eliminar los archivos de la BD 
//Docuemento Evidencia
//***********************************************************************************************************/
function actualizarEvidencia(){
    var userId    = localStorage.getItem('id'); //Recuperar el id del alumno
    var evidencia = document.getElementById('documentoEvidencia').value; //Guardar en una variable el enlace del alumno
    var validacion = "Pendiente de Revisión";
    firebase.database().ref('alumno/'+userId).update({
        documentoEvidencia:evidencia,
        validacionEvidencia:validacion,
    }).catch(function(error){
        alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
    });
    alert("Documento de Evidencia - Guardado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById("documentoEvidencia").value = ""; //Limpia el campo cada que se hace la operación
}

function eliminarEvidencia(){
    var userId = localStorage.getItem('id');
    var evidencia = "Sin Añadir";
    var validacion = "Sin Enviar";
    firebase.database().ref('alumno/'+userId).update({
        documentoEvidencia:evidencia,
        validacionEvidencia:validacion,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById("documentoEvidencia").value = ""; //Limpia el campo cada que se hace la operación
}

//***********************************************************************************************************/
//Docuemento: Solicitud
var notAdd = "Sin Añadir";
function actualizarSolicitud(){
    var userId    = localStorage.getItem('id'); //Recuperar el id del alumno
    var solicitud = document.getElementById('inputSolicitud').value; //Guardar en una variable el enlace del alumno
    firebase.database().ref('alumno/'+userId).update({
        documentoSolitud:solicitud,
    }).catch(function(error){
        alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
    });
    alert("Documento de Evidencia - Guardado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputSolicitud').value = ""; //Limpia el campo cada que se hace la operación
}

function eliminarSolicitud(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoSolitud:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputSolicitud').value = ""; //Limpia el campo cada que se hace la operación
}