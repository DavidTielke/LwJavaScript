"use strict";

var num1 = parseFloat(prompt("Zahl1"));
var num2 = parseFloat(prompt("Zahl2"));

var opRegEx = /\+|\-|\*|\//;
var op = null;
do{    
    op = prompt("Operation (+,-,*,/)");
}while(!opRegEx.test(op));

var result = null;
switch(op){
    case "+":
        result = num1 + num2;
    break;
    case "-":
        result = num1 - num2;
    break;
    case "/":
        result = num1 / num2;
    break;
    case "*":
        result = num1 * num2;
    break;
    default:
        result = "(ERROR)";
    break;
}

alert("Ergebnis ist: "+result);