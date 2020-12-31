function eliminarRegistros(){
    console.log("sdadasdas");


    const db1 = firebase.database();
    coleccionAlumnos = db1.ref().child('alumno');


    coleccionAlumnos.on('child_added', datos =>{

        var id = datos.key;

        //coleccionAlumnos.child(id).remove();
        
    })
}