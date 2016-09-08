var indexCounter = 1;

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.id = indexCounter++;
}

var persons = [
    new Person("David", 32),
    new Person("Lena", 29),
    new Person("Maximilian", 18),
    new Person("Teddy", 3),
];

// die gesamtlänge aller namen aller personen die älter sind 18

// Alle Erwachsenen
var erwachsene = new Array();
for (var i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
        erwachsene.push(persons[i]);
    }
}

// Alle Namen der Erwachsenen
var namen = new Array();
for (var i = 0; i < erwachsene.length; i++) {
    namen.push(erwachsene[i].name);
}

// Gesamtlänge
var gesamtLänge = 0;
for (var i = 0; i < namen.length; i++) {
    gesamtLänge += namen[i].length;
}

console.log(gesamtLänge);

function getNameLengthTotal(persons) {
    return persons.filter(p => p.age >= 18)
        .map(p => p.name)
        .reduce((r, p) => r + p.length, 0);
}
