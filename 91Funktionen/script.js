// Funtionsanweisungen
function Add(z1, z2){
    return z1+ z2;
}

console.log(Add());
console.log(Add(1));
console.log(Add(0,2));

// Funktionsausdruck
var foo = function(z1, z2){
    return z1 + z2;
};

console.log(foo(1,2));
console.log(foo.name);

var names = ["David","Lena"];

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

filter(names, function(item){
    return item.charAt(1) == "a";
}).forEach(function(item){
    console.log(item);
});

// Konstruktorfunktionen
var fkt = new Function("z1","z2","return z1 + z2");
console.log(fkt(1,2));
eval("var z1 = 5; z1++; console.log(z1);");

// Arrowfunktions
var fkt2 = (z1, z2) => z1 + z2;
console.log(fkt2(1,2));

// dynamische Parameter
var fkt3 = function(){
    var summe = 0;
    for(var i = 0; i < arguments.length; i++){
        summe += arguments[i];
    }
    return summe;
};
console.log(fkt3(1,2,3,4,5,6,7,8,9));