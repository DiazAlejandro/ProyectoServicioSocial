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
                document.getElementById('documentoEvidencia').style.display = 'inline';    
            }else{
                documentoEvidencia = str.link(docEv); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('documentoEvidencia').style.display = 'none'; 
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
        //Operaciones para el manejo de la solicitud
        var strSol = "Solicitud Serv. Social";
        var docSol = (snapshot.val() && snapshot.val().documentoSolicitud);
        var documentoSol; //Variable que se mostrará en el HTML
            if (docSol == "Sin Añadir" || docSol == "undefined"){
                documentoSol = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputSolicitud').style.display = 'inline';
            }else{
                documentoSol = strSol.link(docSol); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputSolicitud').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('solicitud').innerHTML = documentoSol;

        //Operaciones para el manejo de la Carta Compromiso
        var strCarC = "Carta Compromiso";
        var docCarC = (snapshot.val() && snapshot.val().documentoCartaCompromiso);
        var documentoCartaC; //Variable que se mostrará en el HTML
            if (docCarC == "Sin Añadir" || docCarC == "undefined"){
                documentoCartaC = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputCartaCom').style.display = 'inline';
            }else{
                documentoCartaC = strCarC.link(docCarC); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputCartaCom').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('cartaCompromiso').innerHTML = documentoCartaC;

        //Operaciones para el manejo de la Tarjeta de Control
        var strTarC = "Tarjeta de Control";
        var docTarC = (snapshot.val() && snapshot.val().documentoTarjetaCtrl);
        var documentoTarjetaC; //Variable que se mostrará en el HTML
            if (docTarC == "Sin Añadir" || docTarC == "undefined"){
                documentoTarjetaC = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputTarjetaCtrl').style.display = 'inline';
            }else{
                documentoTarjetaC = strTarC.link(docTarC); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputTarjetaCtrl').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('tarjetaControl').innerHTML = documentoTarjetaC;

        //Operaciones para el manejo de la Carta Asignacion
        var strCartaAs = "Tarjeta de Control";
        var docCarA = (snapshot.val() && snapshot.val().documentoCartaAsignacion);
        var documentoCartaAs; //Variable que se mostrará en el HTML
            if (docCarA == "Sin Añadir" || docCarA == "undefined"){
                documentoCartaAs = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputCartaAsig').style.display = 'inline';
            }else{
                documentoCartaAs = strCartaAs.link(docCarA); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputCartaAsig').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('cartaAsignacion').innerHTML = documentoCartaAs;

        //Operaciones para el manejo de el Reporte Bimestral
        var strRepB = "Reporte Bimestral";
        var docRepB = (snapshot.val() && snapshot.val().documentoReporteB);
        var documentoRepB; //Variable que se mostrará en el HTML
            if (docRepB == "Sin Añadir" || docRepB == "undefined"){
                documentoRepB = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputReporteB').style.display = 'inline';
            }else{
                documentoRepB = strRepB.link(docRepB); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputReporteB').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('reporteBimestral').innerHTML = documentoRepB;

        //Operaciones para el manejo de la Evaluacion
        var strEva = "Formato Evaluación";
        var docEva = (snapshot.val() && snapshot.val().documentoEvaluacion);
        var documentoEva; //Variable que se mostrará en el HTML
            if (docEva == "Sin Añadir" || docEva == "undefined"){
                documentoEva = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputReporteB').style.display = 'inline';
            }else{
                documentoEva = strEva.link(docEva); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputReporteB').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('formatoEvaluacion').innerHTML = documentoEva;
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
    if (evidencia != ""){
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
    if (solicitud != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoSolicitud:solicitud,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        });
        alert("Documento de Evidencia - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputSolicitud').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarSolicitud(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoSolicitud:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputSolicitud').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Carta Compromiso
function actualizarCartaComp(){
    var userId = localStorage.getItem('id'); //Recuperar el id del alumno
    var cartaC = document.getElementById('inputCartaCom').value; //Guardar en una variable el enlace del alumno
    if (cartaC != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoCartaCompromiso:cartaC,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Documento de Evidencia - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputCartaCom').value = ""; //Limpia el campo cada que se hace la operación    
    }
}

function eliminarCartaComp(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoCartaCompromiso:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputCartaCom').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Tarjeta de Control
function actualizarTarjetaCtrl(){
    var userId = localStorage.getItem('id'); //Recuperar el id del alumno
    var tarjetaC = document.getElementById('inputTarjetaCtrl').value; //Guardar en una variable el enlace del alumno
    if (tarjetaC != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoTarjetaCtrl:tarjetaC,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Documento de Evidencia - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputTarjetaCtrl').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarTarjetaCtrl(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoTarjetaCtrl:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputTarjetaCtrl').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Carta Asignación
function actualizarCartaAsignacion(){
    var userId = localStorage.getItem('id'); //Recuperar el id del alumno
    var cartaAs = document.getElementById('inputCartaAsig').value; //Guardar en una variable el enlace del alumno
    if (cartaAs != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoCartaAsignacion:cartaAs,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Documento de Evidencia - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputCartaAsig').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarCartaAsignacion(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoCartaAsignacion:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputCartaAsig').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Reporte Bimestral
function actualizarReporteB(){
    var userId = localStorage.getItem('id'); //Recuperar el id del alumno
    var repB   = document.getElementById('inputReporteB').value; //Guardar en una variable el enlace del alumno
    if (repB != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoReporteB:repB,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Documento de Evidencia - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputReporteB').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarReporteB(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoReporteB:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputReporteB').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Formato Evaluacion
function actualizarEvaluacion(){
    var userId = localStorage.getItem('id'); //Recuperar el id del alumno
    var eva    = document.getElementById('inputEvaluacion').value; //Guardar en una variable el enlace del alumno
    if (eva != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoEvaluacion:eva,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Documento de Evidencia - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputEvaluacion').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarEvaluacion(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoEvaluacion:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputEvaluacion').value = ""; //Limpia el campo cada que se hace la operación
}