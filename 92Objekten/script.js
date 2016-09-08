// ???
var person = new Object();
person.id = 1;
person.name = "David";
person.age = 32;
person.print = function () {
    return this.id + " " + this.name + " " + this.age;
};

console.log(person.name);
console.log(person["name"]);

console.log(person.print());
console.log(person["print"]());

console.log("name" in person);
delete person.name;
console.log("name" in person);

// Objekt-Literal Schreibweise
var person = [
    {
        name: "David",
        id: 1,
        age: 32,
    }, {
        name: "David",
        id: 1,
        age: 32,
    }, {
        name: "David",
        id: 1,
        age: 32,
    },
];

var auto = {
    marke : "BMW",
    modell: "525"
};

var auto2 = new Object();
auto2.marke = "BMW";
auto2.modell = "525";

// Konstruktorfunktionen
function Person(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.print = function(){
        return this.id + " " + this.name + " " + this.age;
    };
}


var ich = new Person(1,"David",32);
for(var index in ich){
    console.log(index+": "+ich[index]);
} 

function filter(items, criteria){
    var list = new Array();
    for(var index in items){
        var isOk = criteria(items[index]);
        if(isOk){
            list.push(items[index]);
        }
    }
    return list;
}

// JSON
var familie = [
    new Person(1,"David",32),
    new Person(2,"Lena",29),
    new Person(4,"Lena",30),
    new Person(3,"Maximilian",3),
];
console.log(ich.print());
console.log(JSON.stringify(filter(familie, function(item){
    return item.name === "Lena";
})));

var data = '{ "name":  "blubb", "alter": 99 }';
var person = JSON.parse(data);
console.log(person.hamster);