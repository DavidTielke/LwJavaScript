var fkt1 = function(){
    var blubb = 1;

    var fkt2 = function(){
        blubb++;
        console.log(blubb);
    }

    return fkt2;
}

var foo = fkt1();
foo();
foo();

var bar = fkt1();
bar();
bar();