function Person(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.print = function(){
        console.log(this.id+ " " + this.name + " " + this.age);
    }
}


var anzahlPersonen = parseInt(prompt("Anzahl Personen"));
var personen = new Array();

for(var i = 0; i < anzahlPersonen; i++){
    var id = parseInt(prompt("Id von Person "+(i+1)));
    var name = prompt("Name von Person "+(i+1));
    var age = parseInt(prompt("Alter von Person "+(i+1)));
    var person = new Person(id, name, age);
    personen.push(person);
}

personen.sort(function(p1, p2){
    return p1.name > p2.name;
});

for(var i = 0; i < personen.length; i++){
    personen[i].print();
}