function foo() {
    console.log(name);
    if (true) {
        var name = "David";
    }
    console.log(name);

    for(var i = 0; i < 10; i++){
        // ...
    }
    console.log(i);
}

foo();