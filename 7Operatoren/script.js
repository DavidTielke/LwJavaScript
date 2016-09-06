// Vergleichsoperatoren
console.log(3 == 3);
console.log("3" == 3);
console.log("3" === 3);

console.log("3" != 3);
console.log("3" !== 4);

// <
// >
// >=
// <=
console.log("<:" + ("David" < "Lena"));

console.log(4%3);
var foo = 1;
foo++;
foo--;

// Und und Oder
// Liefert ersten Operator zurück, wenn er false ist! SOnst den zweiten
var istWahr1 = true && true;

// Liefert den ersten Operator zurück, wenn er true. Sonst den zweiten.
var istWahr2 = true || true;

function foo2(blubb){
    blubb = blubb || {name : "n/a"};
    
    // if(blubb == undefined){
    //     blubb = new Object();
    // }

    console.log(blubb.name);
}

foo2({name: "David"});
foo2();

// Bitweise
// &
// |
// ^
// ~
// <<
// >>

// Lieblinge
var bar = true ? 5 : 4;

var person = {name: "David", alter: 32};
console.log("name" in person);
console.log(person instanceof Object);
console.log(typeof person);