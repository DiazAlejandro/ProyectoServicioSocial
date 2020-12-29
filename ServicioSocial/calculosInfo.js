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
    var totalc = 0, totalD = 0, totalK = 0, totalDisc= 0, totalLen=0, totalSem=0;
    //con esta función recorre todos los datos almacenados en FB ordenados por mi child(studentNoctrl)
    ref.orderByChild("studentNoctrl").on("child_added", function(snapshot){
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
        var d = snapshot.val();        
        console.log(d);
        total++;
        totalc++; totalD++; totalK++; totalDisc++;totalLen++;totalSem++;
        document.getElementById('total').innerHTML = total;

        console.log("Total"+total);

        //Cantidad de mujeres y hombres
        var sexo = d.studentGenero; //Recupera en la variable sexo el valor del registro d.studentGenero de la BD
        if (sexo == "Masculino") masc++;
            else feme++;
        document.getElementById('masc').innerHTML = masc;
        document.getElementById('feme').innerHTML = feme;

        /**Grafica para las Genero */
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(graficaGenero);
        function graficaGenero() {
            var data = google.visualization.arrayToDataTable([
            ['Genero', 'cantsidad'],
            ['Mujeres', feme],
            ['Hombres', masc],
        ]);

        var options = {
            title: 'Porcentaje de Alumnos por Género',
            pieHole: 0.4,
            color: '#4e73df',
            fontName: 'Arial',
            fontSize: '16',
            backgroundColor: 'f8f9fc',
            pieSliceText: 'label',
            pieSliceText: 'percentage',
            colors: ['#2201C8', '#FF02A7'] 
        };
            var genero = new google.visualization.PieChart(document.getElementById('genero'));
            genero.draw(data, options);
        }
        document.getElementById('totalc').innerHTML = totalc;

        //Actividades Complementarias *********************************************************
        var actividadesCom = d.studentActcomplementaria;
        if (actividadesCom == "Pendiente") actPen++;
        if (actividadesCom == "Completado") actComp++;
        document.getElementById('completadas').innerHTML = actComp;
        document.getElementById('pendientes').innerHTML = actPen;

        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(graficaComplementarias);
        function graficaComplementarias() {
            var data = google.visualization.arrayToDataTable([
            ['Complementarias', 'cantsidad'],
            ['Completadas', actComp],
            ['Pendientes', actPen],
        ]);

        var options = {
            title: 'Actividades Complementarias',
            pieHole: 0.4,
            color: '#4e73df',
            fontName: 'Arial',
            fontSize: '16',
            backgroundColor: 'f8f9fc',
            pieSliceText: 'label',
            pieSliceText: 'percentage',
            colors: ['#FFAB02', '#00D90E'] 
        };
            var conplementarias = new google.visualization.PieChart(document.getElementById('complementarias'));
            conplementarias.draw(data, options);
        }
        
        
        //Dependencia *********************************************************
        var dependencia = d.studentDependencia;
        if (dependencia == "Gubernamental") gob++;
        if (dependencia == "Federal") fed++;
        if (dependencia == "Estatal") est++;
        if (dependencia == "Asociación civil") ac++;
        if (dependencia == "Otra") otro++;
        
        document.getElementById('gob').innerHTML = gob;
        document.getElementById('federal').innerHTML = fed;
        document.getElementById('estatal').innerHTML = est;
        document.getElementById('asociacion').innerHTML = ac;
        document.getElementById('otra').innerHTML = otro;

        /**Grafica para las dependencias */
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(graficaDependencias);
        function graficaDependencias() {
            var data = google.visualization.arrayToDataTable([
            ['Dependencias', 'cantidad'],
            ['Gubernamental', gob],
            ['Federal',      fed],
            ['Estatal',  est],
            ['Asociación Civil', ac],
            ['Otra',    otro] 
        ]);

        var options = {
            title: 'Dependencia',
            pieHole: 0.4,
            color: '#4e73df',
            fontName: 'Arial',
            fontSize: '16',
            backgroundColor: 'f8f9fc',
            colors: ['#FF0000', '#FFB100', '#FF0291', '#3EE600', '#006EC3', '#000ACC' , '#1C003A' ] 
        };
            var dependencia = new google.visualization.PieChart(document.getElementById('dependencia'));
            dependencia.draw(data, options);
        }
        document.getElementById('totalD').innerHTML = totalD;

        //Créditos Completos ******************************************************
        var kardex = d.validacionEvidencia;
        if (kardex == "aceptado") karAc++;
        else karRe++;

        document.getElementById('comp').innerHTML = karAc;
        document.getElementById('inco').innerHTML = karRe;

        /**Grafica para los Kardex */
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(graficaKardex);
        function graficaKardex() {
            var data = google.visualization.arrayToDataTable([
            ['Kardex', 'cantidad'],
            ['Aceptados', karAc],
            ['Rechazados', karRe]
        ]);

        var options = {
            title: 'Kardex Aceptados',
            pieHole: 0.4,
            color: '#4e73df',
            fontName: 'Arial',
            fontSize: '16',
            backgroundColor: 'f8f9fc',
            colors: ['#10D01D', '#FF1300'] 
        };
            var kardexA = new google.visualization.PieChart(document.getElementById('aceptados'));
            kardexA.draw(data, options);
        }   
        document.getElementById('totalK').innerHTML = totalK;

        // Discapacidad *************************************************************
        var discapacidad = d.studentDiscapacidad;
        if (discapacidad == "Si") disc++;
        else nodisc++;

        document.getElementById('disc').innerHTML = disc;
        document.getElementById('nodisc').innerHTML = nodisc;

        /**Grafica para los Kardex */
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(graficaDiscapacidad);
        function graficaDiscapacidad() {
            var data = google.visualization.arrayToDataTable([
            ['Discapacidad', 'Cantidad'],
            ['Con Discapacidad', disc],
            ['Sin Discapacidad', nodisc]
        ]);

        var options = {
            title: 'Almunos que presentan alguna discapacidad',
            pieHole: 0.4,
            color: '#4e73df',
            fontName: 'Arial',
            fontSize: '16',
            backgroundColor: 'f8f9fc',
            colors: ['#660066', '#FFA200'] 
        };
            var discA = new google.visualization.PieChart(document.getElementById('discapacitados'));
            discA.draw(data, options);
        }   
        document.getElementById('totalDis').innerHTML = totalDisc;

        //Lengua ******************************************************+
        var lengua = d.studentLengua;
        if (lengua == "Si") leng++;
        else nleng++;

        document.getElementById('hli').innerHTML = leng;
        document.getElementById('nhli').innerHTML = nleng;

        /**Grafica para los que hablan Lengua Indígena */
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(graficaLengua);
        function graficaLengua() {
            var data = google.visualization.arrayToDataTable([
            ['Lengua', 'Cantidad'],
            ['Hablan Lengua Indígena', leng],
            ['No Hablan Lengua Indígena', nleng]
        ]);

        var options = {
            title: 'Almunos que Hablan Alguna Lengua Indígena',
            pieHole: 0.4,
            color: '#4e73df',
            fontName: 'Arial',
            fontSize: '16',
            backgroundColor: 'f8f9fc',
            colors: ['#FFA110', '#900024'] 
        };
            var lengua = new google.visualization.PieChart(document.getElementById('lengua'));
            lengua.draw(data, options);
        }
        document.getElementById('totalLen').innerHTML = totalLen;


        /*********************************************************************************************/
        var semestre = d.studentSemestre;
        if (semestre == 5) quinto++;
        if (semestre == 6) sexto++;
        if (semestre == 7) septimo++;
        if (semestre == 8) octavo++;
        if (semestre == 9) noveno++;
        if (semestre == 10) decimo++;
        if (semestre == 11) onceavo++;
        if (semestre == 12) doceavo++;
        if (semestre == 13) treceavo++;

        document.getElementById('quinto').innerHTML = quinto;
        document.getElementById('sexto').innerHTML = sexto;
        document.getElementById('septimo').innerHTML = septimo;
        document.getElementById('octavo').innerHTML = octavo;
        document.getElementById('noveno').innerHTML = noveno;
        document.getElementById('decimo').innerHTML = decimo;
        document.getElementById('onceavo').innerHTML = onceavo;
        document.getElementById('doceavo').innerHTML = doceavo;
        document.getElementById('treceavo').innerHTML = treceavo;

        /**Grafica - Cantidad de Alumnos por semestres */
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(graficaSemestre);
        function graficaSemestre() {
            var data = google.visualization.arrayToDataTable([
            ['Semestre', 'Cantidad'],
            ['Quinto', quinto],
            ['Sexto', sexto],
            ['Septimo', septimo],
            ['Octavo', octavo],
            ['Noveno', noveno],
            ['Decimo', decimo],
            ['Onceavo', onceavo],
            ['Doceavo', doceavo],
            ['Treceavo', treceavo],
        ]);

        var options = {
            title: 'Alumnos por Semestre',
            pieHole: 0.4,
            color: '#4e73df',
            fontName: 'Arial',
            fontSize: '16',
            backgroundColor: 'f8f9fc',
            colors: ['#FF0000', '#FF6700', '#FFB100', '#FF0291', '#3EE600', '#00C68A', '#006EC3', '#000ACC' , '#1C003A' ] 
        };
            var semes = new google.visualization.PieChart(document.getElementById('semestre'));
            semes.draw(data, options);
        }
        document.getElementById('totalSem').innerHTML = totalSem;

    });

    

}