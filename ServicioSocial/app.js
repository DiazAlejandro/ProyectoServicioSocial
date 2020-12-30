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
            if (docEv == "Sin Añadir" || docEv == null){
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

            if (revEvidencia == null){
                document.getElementById('revisionEvidencia').innerHTML = "Sin Envío";   
            }else document.getElementById('revisionEvidencia').innerHTML = revEvidencia;   
            
            if (revEvidencia == "aceptado"){
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
            if (docSol == "Sin Añadir" || docSol == null){
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
            if (docCarC == "Sin Añadir" || docCarC == null){
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
            if (docTarC == "Sin Añadir" || docTarC == null){
                documentoTarjetaC = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputTarjetaCtrl').style.display = 'inline';
            }else{
                documentoTarjetaC = strTarC.link(docTarC); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputTarjetaCtrl').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('tarjetaControl').innerHTML = documentoTarjetaC;

        //Operaciones para el manejo de la Carta Asignacion
        var strCartaAs = "Carta de Asignación";
        var docCarA = (snapshot.val() && snapshot.val().documentoCartaAsignacion);
        var documentoCartaAs; //Variable que se mostrará en el HTML
            if (docCarA == "Sin Añadir" || docCarA == null){
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
            if (docRepB == "Sin Añadir" || docRepB == null){
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
            if (docEva == "Sin Añadir" || docEva == null){
                documentoEva = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputEvaluacion').style.display = 'inline';
            }else{
                documentoEva = strEva.link(docEva); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputEvaluacion').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('formatoEvaluacion').innerHTML = documentoEva;

        //Operaciones para el manejo de la Evaluacion
        var strAuEva = "Formato Auto-Evaluación";
        var docAuEva = (snapshot.val() && snapshot.val().documentoAutoEv);
        var documentoAuEva; //Variable que se mostrará en el HTML
            if (docAuEva == "Sin Añadir" || docAuEva == null){
                documentoAuEva = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputAutoEv').style.display = 'inline';
            }else{
                documentoAuEva = strAuEva.link(docAuEva); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputAutoEv').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('formatoAutoEv').innerHTML = documentoAuEva;

        //Operaciones para el manejo de la Evaluación por Parte del Prestador
        var strEvPres = "Formato Evaluación por Parte del Prestador";
        var docEvPres  = (snapshot.val() && snapshot.val().documentoEvPrestador);
        var documentoEvPres; //Variable que se mostrará en el HTML
            if (docEvPres == "Sin Añadir" || docEvPres == null){
                documentoEvPres = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputEvPres').style.display = 'inline';
            }else{
                documentoEvPres = strEvPres.link(docEvPres); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputEvPres').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('formatoEvPres').innerHTML = documentoEvPres;

         //Operaciones para el manejo de la Constancia
         var strCons = "Constancia Terminación";
         var docCons = (snapshot.val() && snapshot.val().documentoConstancia);
         var documentoCons; //Variable que se mostrará en el HTML
             if (docCons == "Sin Añadir" || docCons == null){
                documentoCons = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputconstanciaTerminacion').style.display = 'inline';
             }else{
                documentoCons = strCons.link(docCons); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputconstanciaTerminacion').style.display = 'none'; //Deshabilita input
             }
         document.getElementById('constanciaTerminacion').innerHTML = documentoCons;

        //Operaciones para el manejo de la Carta Aceptación
        var strCarA = "Carta Aceptación";
        var docCarA = (snapshot.val() && snapshot.val().documentoCartaAceptacion);
        var documentoCarA; //Variable que se mostrará en el HTML
            if (docCarA == "Sin Añadir" || docCarA == null){
                documentoCarA = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputCartaAceptacion').style.display = 'inline';
            }else{
                documentoCarA = strCarA.link(docCarA); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputCartaAceptacion').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('cartaAceptacion').innerHTML = documentoCarA;

        //Operaciones para el manejo de la Plan de Trabajo
        var strPlan = "Plan de Trabajo";
        var docPlan = (snapshot.val() && snapshot.val().documentoPlanTrabajo);
        var documentoPlan; //Variable que se mostrará en el HTML
            if (docPlan == "Sin Añadir" || docPlan == null){
                documentoPlan = "Sin añadir";    //Esto aparece en HTML cuando no hay documento  
                document.getElementById('inputPlanTrabajo').style.display = 'inline';
            }else{
                documentoPlan = strPlan.link(docPlan); //.link convierte en enlace el dato recuperado de la BD
                document.getElementById('inputPlanTrabajo').style.display = 'none'; //Deshabilita input
            }
        document.getElementById('planTrabajo').innerHTML = documentoPlan;
    });
}
//Llamada automática, esta funcion permite que se ejecute dentro del 
//archivo html sin necesidad de tener un evento de tipo onClick().
window.onload = function(){
    validar();
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
        alert("Solicitud - Guardado");
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
        alert("Carta Compromiso - Guardado");
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
        alert("Tarjeta de Control - Guardado");
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
        alert("Carta Asignación - Guardado");
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
        alert("Reporte Bimestral - Guardado");
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
        alert("Formato Evaluación - Guardado");
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

//******************************************************************************************/
//Documento = FormatoAutoEvaluación
function actualizarAutoEv(){
    var userId  = localStorage.getItem('id'); //Recuperar el id del alumno
    var autoEva = document.getElementById('inputAutoEv').value; //Guardar en una variable el enlace del alumno
    if (autoEva != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoAutoEv:autoEva,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Formato de AutoEvaluación - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputAutoEv').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarAutoEv(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoAutoEv:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputAutoEv').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Evaluación por Parte del Prestador
function actualizarEvPres(){
    var userId     = localStorage.getItem('id'); //Recuperar el id del alumno
    var autoEvPres = document.getElementById('inputEvPres').value; //Guardar en una variable el enlace del alumno
    if (autoEvPres != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoEvPrestador:autoEvPres,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Evaluación por Parte del Prestador - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputEvPres').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarEvPres(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoEvPrestador:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputEvPres').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Constancia de Terminación
function actualizarConstTer(){
    var userId  = localStorage.getItem('id'); //Recuperar el id del alumno
    var consTer = document.getElementById('inputconstanciaTerminacion').value; //Guardar en una variable el enlace del alumno
    if (consTer != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoConstancia:consTer,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Constancia de Terminación - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputconstanciaTerminacion').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarConstTer(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoConstancia:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputconstanciaTerminacion').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Carta Aceptación
function actualizarCartaAceptacion(){
    var userId  = localStorage.getItem('id'); //Recuperar el id del alumno
    var cartaAc = document.getElementById('inputCartaAceptacion').value; //Guardar en una variable el enlace del alumno
    if (cartaAc != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoCartaAceptacion:cartaAc,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Carta de Aceptación - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputCartaAceptacion').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarCartaAceptacion(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoCartaAceptacion:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputCartaAceptacion').value = ""; //Limpia el campo cada que se hace la operación
}

//******************************************************************************************/
//Documento = Carta Aceptación
function actualizarPlanTrabajo(){
    var userId  = localStorage.getItem('id'); //Recuperar el id del alumno
    var platTrb = document.getElementById('inputPlanTrabajo').value; //Guardar en una variable el enlace del alumno
    if (platTrb != ""){
        firebase.database().ref('alumno/'+userId).update({
            documentoPlanTrabajo:platTrb,
        }).catch(function(error){
            alert("Su documento no ha sido guardado con éxito. Intentelo mas tarde");
        }); 
        alert("Plan de Trabajo - Guardado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById('inputPlanTrabajo').value = ""; //Limpia el campo cada que se hace la operación
    }
}

function eliminarPlanTrabajo(){
    var userId = localStorage.getItem('id');
    firebase.database().ref('alumno/'+userId).update({
        documentoPlanTrabajo:notAdd,
    }).catch(function(error){
        alert("Su documento no ha sido borrado con éxito. Intentelo mas tarde");
    });
    alert("Documento Eliminado");
    location.reload(); //Actualizar la pagina automáticamente
    document.getElementById('inputPlanTrabajo').value = ""; //Limpia el campo cada que se hace la operación
}

function validar (){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // El usuario está logueado, realiza acciones aquí
          mostrarInformacion();
          console.log("Loggeado");
        } else {
             console.log("usuario nullo");
             alert("Cerrando Sesión");
             location.replace("/login.html");
        }
      });
}