//VARİABLES
let number1 = 0;
let number2 = 0;
let result = 0;
let result2 = 0;

//FUNCTİONS

//toplama+

function toplama() {
    number1 = document.getElementById("Number01").value;
    number2 = document.getElementById("Number02").value;
    result = Number(number1) + Number(number2);
    document.getElementById('result').innerHTML = result;
}

//çıxma-

function çıxma() {
    number1 = document.getElementById("Number01").value;
    number2 = document.getElementById("Number02").value;
    result = Number(number1) - Number(number2);
    document.getElementById('result').innerHTML = result;
}

//vurma*

function vurma() {
    number1 = document.getElementById("Number01").value;
    number2 = document.getElementById("Number02").value;
    result = Number(number1) * Number(number2);
    document.getElementById('result').innerHTML = result;
}

//bölmə/

function bölmə() {
    number1 = document.getElementById("Number01").value;
    number2 = document.getElementById("Number02").value;
    result = Number(number1) / Number(number2);
    document.getElementById('result').innerHTML = result;
}

//təmizlə

function təmizlə() {
    document.getElementById("result").innerHTML ="__";
    document.getElementById("Number01").value = "";
    document.getElementById("Number02").value = "";
}