// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBjAqwgBh893FPDFLg1PEypTp2_e_Uh2qA",
    authDomain: "servicio-social-d5a95.firebaseapp.com",
    databaseURL: "https://servicio-social-d5a95-default-rtdb.firebaseio.com",
    projectId: "servicio-social-d5a95",
    storageBucket: "servicio-social-d5a95.appspot.com",
    messagingSenderId: "302681815081",
    appId: "1:302681815081:web:f6649140f3fee89acb4438",
    measurementId: "G-N4860PEFDP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//<!-- Prueba del register -->
function registrarAlumno(e) {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var name = document.getElementById('name').value;
    var apell = document.getElementById('apell').value;
    var carrera = document.getElementById('carrera').value;
    var noctrl = document.getElementById('noctrl').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    //alert(" name= " + name + " apell= " + apell + " carrera= " + carrera + " noctrl= " + noctrl + "email=" + email + " password=" + password);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        //alert("Alumno Registrado");
        var id = firebase.auth().currentUser.uid;
        firebase.database().ref('alumno/'+id).set({
            studentName:name,
            apellidos:apell,
            studentCarrera:carrera,
            studentNoctrl:noctrl
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

function activar() {
    var seleccionado=document.getElementsByName('chec');
    document.getElementById('botoncito').disabled = !document.getElementById('botoncito').disabled;

}
