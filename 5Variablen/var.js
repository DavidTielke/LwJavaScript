"use strict";

function f1(){
    let foo = "David";
    console.log(foo);

    foo = null;
    foo = undefined;
}

function f2(){

}

f1();
f2();