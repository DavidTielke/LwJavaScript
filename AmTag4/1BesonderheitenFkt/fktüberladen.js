var fkt1 = function(name){
    console.log("A");
};

var fkt1 = function(name, age){
    console.log("B");
};

fkt1();

// Möglichkeit 1: Alle Parameter angeben
var fkt3 = function(name, age){
    if(age){
        // ...
    }
}

// Möglichkeit 2: Parameter weglassen
var fkt4 = function(name){
    if(arguments[1]){
        // ...
    }
}

// Möglichkeit 3: Optionale Paramter als Objekt
var fkt5 = function(name, options){
    if(options && options.age){
        // ...
    }
}

fkt5("David");
fkt5("David", {
    age: 32, 
    id: 2});
fkt5("David", {id: 2});