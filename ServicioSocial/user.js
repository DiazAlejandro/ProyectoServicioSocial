function loginAlumno(){
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
    if (!email.startsWith('admin')){
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
  }else{
    alert("No tiene los permisos correspondientes.")
  }

}

function logoutAlumno(){
  firebase.auth().signOut().then(function() {

})
.catch(function(error) {
  // An error happened
});  
} 