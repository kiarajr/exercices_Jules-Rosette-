<!--EXO 1.1 -->

var nb_1 = 10;
var nb_2 = 20;
var result = nb_1 + nb_2;

function Add() {
    document.getElementById("result-exo-1-1").innerHTML = result;
}

<!--EXO 1.2 -->

var nb_0 = 10;
var nb_00 = 20;
var result0 = nb_00 * nb_0;


function Mul() {
   document.getElementById("result-exo-2-2").innerHTML = result0;
}

<!--EXO 1.3 -->

var nb_3 = 12;
var nb_4 = 5;
var result1 = nb_3 % nb_4;

function Div() {
 document.getElementById("result-exo-3-3").innerHTML = result1; 
} 


<!--EXO 1.4 -->



function Soustraction() {
    var nb_5 = document.getElementById("ex1_input1").value; 
    var nb_6 = document.getElementById("ex1_input2").value; 
    var result2 = nb_5 - nb_6; 
    document.getElementById("ex1_result").innerHTML = result2;
}

<!--EXO 1.5 -->

function Multiplication() {
    var nb_11 = document.getElementById("ex4_input1").value; 
    var nb_12 = document.getElementById("ex4_input2").value; 
    var result5 = nb_11 * nb_12; 
    document.getElementById("ex2_result").innerHTML = result5;
}

<!--EXO 2.1 -->

function Division() {
    var nb_9= document.getElementById("ex3_input1").value; 
    var nb_10 = document.getElementById("ex3_input2").value; 
    var result4 = nb_9 / nb_10; 
    document.getElementById("ex3_result").innerHTML = result4;
}

<!--EXO 2.2 -->


function Addition() {
    var nb_13 = document.getElementById("ex5_input1").value; 
    var nb_14 = document.getElementById("ex5_input2").value; 
    var result6= nb_13/1 + nb_14/1; 
    document.getElementById("ex4_result").innerHTML = result6;
}

<!--EXO 3 -->

function Reste() {
var nb_15 = 82;
  var nb_16 = 8; 
var result7 = nb_15 % nb_16;
document.getElementById("reste_div").innerHTML = result7
}
window.onload = Reste;


<!--EXO 4 -->     
  

var result8 = 0;
document.getElementById("ex6_result").innerHTML = result8 ;

function plusTen(){
var resultat2 = (result8 += 10) ;
	document.getElementById("ex6_result").innerHTML = resultat2 ;
}

function diviseFive() {
var resultat3 = (result8 / 5) ; 
    document.getElementById("ex6_result").innerHTML = resultat3 ;
}

function multiplyHeight() {
var resultat4 = (result8 * 8) ; 
    document.getElementById("ex6_result").innerHTML = resultat4 ;
}

function minusTwo() {
var resultat5 = (result8 - 2) ; 
    document.getElementById("ex6_result").innerHTML = resultat5 ;
}

function combinePlusTenMinusTwo() {
var resultat6 = (result8 + 10 - 2) ; 
    document.getElementById("ex6_result").innerHTML = resultat6 ;
}

function resetExo4() {
document.getElementById("ex6_result").value = "";


}

<!--EXO 5 -->   

var nbmax = 1000 ;
var nbmin = 50 ;
function setRandom(){
    var nombreRandom = Math.floor(Math.random() * (nbmax - nbmin) + nbmin);
document.getElementById("ex5_resultat").innerHTML = nombreRandom ;    
}
window.onload = setRandom;


<!--EXO 6 -->   

var nb_17 = 60;
var resultat8 = nb_17 / 2;
document.getElementById("ex7_result").innerHTML = resultat8;

<!--EXO 7 -->   

var nb_18 = 32;
var nb_19 = 13;
var resultat10 = nb_18 - nb_19;
document.getElementById("ex8_result").innerHTML = resultat10;

<!--EXO 8 -->   

var nb_20 = 90;
var nb_21 = 10;
var nb_22 = 4; 
var resultat11 = nb_20 / nb_21 % nb_22;
document.getElementById("ex9_result").innerHTML = resultat11;
window.onload = Reste;

<!--EXO 9 -->  

function convertToPound(){
var nb_23 = document.getElementById("ex9_input1").value;
var resultat12 = nb_23 * 2.2046; 
document.getElementById("ex9_resultat").innerHTML = resultat12;
}

function convertToKg(){
var nb_24 = document.getElementById("ex9_input2").value;
var resultat13 = nb_24 / 2.2046; 
document.getElementById("ex10_resultat").innerHTML = resultat13;
}

<!--EXO 10 -->  

function AddSentence (){ 
var nb_25 = ex10_result.innerHTML
ex10_result.innerHTML = nb_25 + document.getElementById("ex10_input").value; 
}

function resetSentence () {
document.getElementById("ex10_result").value = "";
    
}

<!--EXO 11 -->  
{
var nbmax1 = 10 ;
var nbmin1 = 1 ;
function coteAle(){
var nombreRandom = Math.abs(Math.random() * (nbmax1 - nbmin1) + nbmin1);
var resultat_11 = nombreRandom.toFixed(2);
document.getElementById("ex11_input").value = resultat_11 ; 

} 

function calCote(){
var nb_26 = document.getElementById("ex11_input").value ;
var nb_27 = document.getElementById("ex11_input1").value ;
var resultat_12 = ((nb_26 * nb_27) - nb_27);
var resultat_13 = resultat_12.toFixed(2);
document.getElementById("ex11_result").innerHTML = resultat_13;
    
}

}


