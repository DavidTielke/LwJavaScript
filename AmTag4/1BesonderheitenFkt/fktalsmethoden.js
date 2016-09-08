name ="BÄHM";
var printFkt = function(){
    foo = 5;
    return this.name;
}

var person1 = {
    name : "David",
    print : printFkt
}

var person2 = {
    name : "Lena",
    print : printFkt
}

var person3 = new Object();
person3.name = "David";
person3.print = printFkt;

console.log(printFkt());
console.log(person1.print())