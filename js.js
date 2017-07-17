function pesoPlanetas(){
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;
    var mercurio =2,8; 
     var venur = 8,9;
var tierra == 9,8;
var marte = 3,7;
var jupiter = 22,9;
var saturno = 9,1;
var urano = 7,8;
var neptuno = 11,0;
var luna = 1,6;

    var peso = document.getElementById("peso").value;
   
    var pesoMarte = peso * g_marte;
    var pesoTierra = peso * g_tierra;
    var pesoJupiter = peso * g_jupiter;
    var pesoMercurio = peso * g_mercurio;
    
   
    alert("Marte: " + pesoMarte + "\n" + "Tierra: " + pesoTierra + "\n" + "Jupiter: " + pesoJupiter + "\n" + "Mercurio: " + pesoMercurio );


}
    
