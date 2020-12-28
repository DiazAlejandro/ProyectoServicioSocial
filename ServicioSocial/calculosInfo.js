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

firebase.analytics();

var db = firebase.firestore();

window.onload = function(){
    try {
        
        mostrarInformacion();
    }catch(error){
        console.log(error);
        console.log("Error - Cargando Datos");
    }
}

function mostrarInformacion(){    
    var db = firebase.database();
    var ref = db.ref("alumno");
    var masc = 0, feme = 0;
    var IGE = 0, ISC = 0, IC = 0, IE = 0, IM = 0, II = 0, IQ = 0, IEL = 0,LA = 0 ;
    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(studentNoctrl)
    ref.orderByChild("studentNoctrl").on("child_added", function(snapshot){
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
        var d = snapshot.val();        
        console.log(d);

        //Cantidad de mujeres y hombres
        var sexo = d.studentGenero; //Recupera en la variable sexo el valor del registro d.studentGenero de la BD
        if (sexo == "Masculino") masc++;
            else feme++;
        document.getElementById('masc').innerHTML = masc;
        document.getElementById('feme').innerHTML = feme;

        var carrera = d.studentCarrera;
        if (carrera == "Ingeniería en Gestión Empresarial") IGE++;
        if (carrera == "Ingeniería en Sis. Computacionales") ISC++;
        if (carrera == "Ingeniería Civil") IC++;
        if (carrera == "Ingeniería Electrónica") IE++;
        if (carrera == "Ingeniería Mecánica") IM++;
        if (carrera == "Ingeniería Industria") II++;
        if (carrera == "Ingeniería Química") IQ++;
        if (carrera == "Ingeniería Electrica") IEL++;
        if (carrera == "Licenciatura en administración") LA++;

        document.getElementById('ige').innerHTML = IGE;
        document.getElementById('isc').innerHTML = ISC;
        document.getElementById('ic').innerHTML = IC;
        document.getElementById('ie').innerHTML = IE;
        document.getElementById('im').innerHTML = IM;
        document.getElementById('ii').innerHTML = II;
        document.getElementById('iq').innerHTML = IQ;
        document.getElementById('iel').innerHTML = IEL;
        document.getElementById('la').innerHTML = LA;

    });

}