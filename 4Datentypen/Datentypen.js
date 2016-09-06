// Datentypen
var number = 4;
var str = "David";
var bool = true;
var nichts = null;
var undef = undefined;
var obj = new Object();

console.log(typeof number);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof nichts);
console.log(typeof undef);
console.log(typeof obj);

// Number
var num1 = 5;
console.log("5: " + typeof num1);

var num2 = 2.34;
console.log("2.34: " + typeof num2);

var num3 = 0xff;
console.log("0xff: " + typeof num3);

var num4 = 0344;
console.log("O344: " + typeof num4);

var num5 = Infinity;
var num6 = NaN;

var blubb = 0/0;
console.log(blubb);
console.log(NaN == NaN);

// String
var name = "David \"Mann\"";
var name2 = 'Lena "Frau"';
console.log(name.charAt(0));
console.log(typeof name[0]);
var strNum = parseInt("3.23");
console.log(strNum);
var strFloat = parseFloat("3.34");
console.log(strFloat);

// Spaß mit JavaScript
var num7 = 4;
var strNum7 = num7 + "";
console.log(strNum7);

// Boolean
// Falsy Datentypen: "", 0, undefined, NaN, null
console.log(0 == false);
console.log(false == "");
console.log(0 == "");
console.log(undefined == true); // Wie false
console.log(undefined == null);

var foo = undefined;
var bar = null;

console.log(false == null);
var person = {}
if(person){

}
console.log(null == null);
console.log(undefined == undefined);
console.log(undefined == null);



