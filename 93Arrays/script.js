var namen = new Array();

namen[0] = "David";
namen[1] = "Lena";
namen[2] = "Maximilian";

for(var i = 0; i< namen.length; i++){
   console.log(namen[i]);
}

namen.push("Teddy");
var last = namen.pop();

var first = namen.shift();

namen.sort(function(p1, p2){
    return p1.length > p2.length;
});

namen.forEach(function(item){
    console.log(item.length);
});

// Regex
var ausdruck = /^D/;
var isMatch = ausdruck.test("David");
console.log(isMatch);