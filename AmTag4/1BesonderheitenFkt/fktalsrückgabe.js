function calcFactory(operator){
    switch(operator){
        case "+":
            return function(z1, z2){ return z1 + z2;};
        case "-":
            return function(z1, z2){ return z1 - z2;};
    }
}

var add = calcFactory("+");
console.log(add(1,2));
console.log(add(2,3));

var sub = calcFactory("-");
console.log(sub(1,2));
console.log(sub(2,3));