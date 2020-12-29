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
    src="https://www.gstatic.com/charts/loader.js" //Importar charts de google

    var db = firebase.database();
    var ref = db.ref("alumno");
    var masc = 0, feme = 0;
    var IGE = 0, ISC = 0, IC = 0, IE = 0, IM = 0, II = 0, IQ = 0, IEL = 0,LA = 0 ;
    var actPen = 0, actComp = 0 ;
    var gob = 0, fed = 0, est = 0, ac = 0, otro = 0;
    var karAc = 0, karRe = 0;
    var disc = 0, nodisc = 0;
    var leng = 0 , nleng = 0;
    var quinto = 0, sexto = 0, septimo = 0, octavo = 0, 
    noveno = 0, decimo = 0, onceavo = 0, doceavo = 0, treceavo = 0;
    var total = 0;
    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(studentNoctrl)
    ref.orderByChild("studentNoctrl").on("child_added", function(snapshot){
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
        var d = snapshot.val();        
        console.log(d);
        total++;
        document.getElementById('total').innerHTML = total;

        console.log("Total"+total);

        

        var carrera = d.studentCarrera;
        if (carrera == "Ingeniería en Gestión Empresarial") IGE++;
        if (carrera == "Ingeniería en Sis. Computacionales") ISC++;
        if (carrera == "Ingeniería Civil") IC++;
        if (carrera == "Ingeniería Electrónica") IE++;
        if (carrera == "Ingeniería Mecánica") IM++;
        if (carrera == "Ingeniería Industrial") II++;
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

        /**Grafica para las Carreras */
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(graficaCarrera);
        function graficaCarrera() {
            var data = google.visualization.arrayToDataTable([
            ['Carrera', 'cantsidad'],
            ['Ingeniería en Gestión Empresarial', IGE],
            ['Ingeniería en Sis. Computacionales', ISC],
            ['Ingeniería Civil', IC],
            ['Ingeniería Electrónica', IE],
            ['Ingeniería Mecánica', IM],
            ['Ingeniería Industrial', II],
            ['Ingeniería Química', IQ],
            ['Ingeniería Eléctrica', IEL],
            ['Licenciatura en administración', LA],
        ]);

        var options = {
            title: 'Estadística de Alumnos por Carrera',
            pieHole: 0.4,
            color: '#4e73df',
            fontName: 'Arial',
            fontSize: '16',
            backgroundColor: 'f8f9fc',
            pieSliceText: 'percentage',
            colors: ['#FF0000', '#FF6700', '#FFB100', '#FF0291', '#3EE600', '#00C68A', '#006EC3', '#000ACC' , '#1C003A' ] 
        };
            var carreras = new google.visualization.PieChart(document.getElementById('carreras'));
            carreras.draw(data, options);
        }
        

    });

    

}