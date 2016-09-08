
// Higher-Order Function
var fkt1 = function(fkt2){
    console.log("Innerhalb von FKT1");
    fkt2();
};

// Embedded | Lower-Level Function
fkt1(function(){
    console.log("Innerhalb von anonymer Methode");
});