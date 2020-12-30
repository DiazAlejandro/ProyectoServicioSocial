function enlaceGestion(){
    var gestion = document.getElementById('ige').value;
    firebase.database().ref('enlace/').update({
        gestion:gestion,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Ingeniería en Gestión Empresarial Asignado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("ige").value = "";
}

function enlaceSistemas(){
    var sistemas = document.getElementById('isc').value;
    firebase.database().ref('enlace/').update({
        sistemas:sistemas,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Ingeniería en Sistemas Computacionales");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("isc").value = "";
}

function enlaceCivil(){
    var civil = document.getElementById('ic').value;
    firebase.database().ref('enlace/').update({
        civil:civil,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Ingeniería Civil Asignado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("ic").value = "";
}

function enlaceElectronica(){
    var electronica = document.getElementById('ie').value;
    firebase.database().ref('enlace/').update({
        electronica:electronica,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Ingeniería Electrónica Asignado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("ie").value = "";
}

function enlaceMecanica(){
    var mecanica = document.getElementById('im').value;
    firebase.database().ref('enlace/').update({
        mecanica:mecanica,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Ingeniería Mecánica Asignado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("im").value = "";
}

function enlaceIndustrial(){
    var industrial = document.getElementById('ii').value;
    firebase.database().ref('enlace/').update({
        industrial:industrial,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Ingeniería Industrial Asignado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("ii").value = "";
}

function enlaceQuimica(){
    var quimica = document.getElementById('iq').value;
    firebase.database().ref('enlace/').update({
        quimica:quimica,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Ingeniería Química Asignado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("iq").value = "";
}

function enlaceElectrica(){
    var electrica = document.getElementById('iel').value;
    firebase.database().ref('enlace/').update({
        electrica:electrica,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Ingeniería Eléctrica Asignado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("iel").value = "";
}


function enlaceAdministracion(){
    var administracion = document.getElementById('admin').value;
    firebase.database().ref('enlace/').update({
        administracion:administracion,
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
    });
    alert("Enlace para Licenciatura en Administración Asignado");
        location.reload(); //Actualizar la pagina automáticamente
        document.getElementById("admin").value = "";
}
//Cargar los enlaces para ver que enlace es
function mostrarEnlaces(){
        firebase.database().ref('enlace').once('value').then(function(snapshot){
            var ige = (snapshot.val() && snapshot.val().gestion);
            if (ige == null || ige == "undefined") 
                document.getElementById('linkIGE').innerHTML = "Sin Asignar";
            else document.getElementById('linkIGE').innerHTML = ige.link(ige);

            var isc = (snapshot.val() && snapshot.val().sistemas);
            if (isc == null || isc == "undefined") 
                document.getElementById('linkISC').innerHTML = "Sin Asignar";
            else document.getElementById('linkISC').innerHTML = isc.link(isc);

            var ic = (snapshot.val() && snapshot.val().civil);
            if (ic == null || ic == "undefined") 
                document.getElementById('linkIC').innerHTML = "Sin Asignar";
            else document.getElementById('linkIC').innerHTML = ic.link(ic);

            var ie = (snapshot.val() && snapshot.val().electronica);
            if (ie == null || ie == "undefined") 
                document.getElementById('linkIE').innerHTML = "Sin Asignar";
            else document.getElementById('linkIE').innerHTML = ie.link(ie);

            var im = (snapshot.val() && snapshot.val().mecanica);
            if (im == null || im == "undefined") 
                document.getElementById('linkIM').innerHTML = "Sin Asignar";
            else document.getElementById('linkIM').innerHTML = im.link(im);

            var ii = (snapshot.val() && snapshot.val().industrial);
            if (ii == null || ii == "undefined") 
                document.getElementById('linkII').innerHTML = "Sin Asignar";
            else document.getElementById('linkII').innerHTML = ii.link(ii);

            var iq = (snapshot.val() && snapshot.val().quimica);
            if (iq == null || iq == "undefined") 
                document.getElementById('linkIQ').innerHTML = "Sin Asignar";
            else document.getElementById('linkIQ').innerHTML = iq.link(iq);

            var iel = (snapshot.val() && snapshot.val().electrica);
            if (iel == null || iel == "undefined") 
                document.getElementById('linkIEL').innerHTML = "Sin Asignar";
            else document.getElementById('linkIEL').innerHTML = iel.link(iel);

            var admin = (snapshot.val() && snapshot.val().administracion);
            if (admin == null || admin == "undefined") 
                document.getElementById('linkADMIN').innerHTML = "Sin Asignar";
            else document.getElementById('linkADMIN').innerHTML = admin.link(admin);
            
        });
}


window.onload = function(){
    validar();
}

function validar (){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // El usuario está logueado, realiza acciones aquí
          mostrarEnlaces();
          console.log("Loggeado");
        } else {
             console.log("usuario nullo");
             alert("Usuario No Autentificado, Inicie Sesión");
             location.replace("/login.html");
        }
      });
}
