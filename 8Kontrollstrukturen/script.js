if (true) {

} else {

}

function foo(para)
{
    if(para){

    }
}

// Switch
var foo2 =4;

function GetInt(){
    return 6;
}

switch(foo2){
    case GetInt():

    break;
    case 4:
        console.log("firstNum");
        break;    
    case 4:
        console.log("num");
    break;
    case "4":
        console.log("string");
    break;
}



// Schleifen
for(var i = 0; i < 10; i++){
    console.log(i);
}

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

var i = 0;
do{
    console.log(i);
    i++;
}while(i < 10);

var namen = ["David","Lena","Maximilian"];
for(key in namen){
    console.log(namen[key]);
}