function loginAdmin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.startsWith('admin')){
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
        var id = firebase.auth().currentUser.uid;
        window.location.replace("/control-panel.html");
        localStorage.setItem('id',id);
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
        alert("Usuario No Registrado - Verifique sus Datos");
        console.log(errorCode);
        console.log(errorMessage);
    });
    } else {
        alert("No tiene los permisos correspondientes");
    }
}
    