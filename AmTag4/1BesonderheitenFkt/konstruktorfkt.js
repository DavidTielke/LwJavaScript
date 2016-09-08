function Auto(marke, modell){
    this.marke = marke;
    this.modell = modell;
}

var auto = new Auto("BMW","525");

var auto2 = new Object();
auto2.constructor = Auto;
auto2.constructor();

console.log(auto2.constructor);
console.log(typeof auto2);

