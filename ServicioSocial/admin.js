function loginAdmin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
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
}

function logoutAdmin(){
    firebase.auth().signOut().then(function() {
        window.location.replace("/index.html");
    }).catch(function(error) {
    // An error happened.
    });     
}

function mostrarInformacion(){    
    var db = firebase.database();
    var ref = db.ref("alumno");
    var table = document.getElementById("tabla");
        
    //limpia la tabla
    table.innerHTML = "";
     
     //con esta función recorre todos los datos almacenados en FB ordenados por mi child(studentNoctrl)
        
    ref.orderByChild("studentNoctrl").on("child_added", function(snapshot){
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
         
      var d = snapshot.val();        
            
      {
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      
      // asigna a las celdas el valir del Child especificado
      console.log(d);
      cell1.innerHTML = d.studentNoctrl;
      cell2.innerHTML = d.apellidos;
      cell3.innerHTML = d.studentName;
      cell4.innerHTML = d.studentCarrera;
      cell5.innerHTML = d.documento1;
      cell6.innerHTML = d.documento2;
      cell7.innerHTML = d.documento3;
      }
     
            
    });
     
    }

window.onload = function(){
    mostrarInformacion();
}
    