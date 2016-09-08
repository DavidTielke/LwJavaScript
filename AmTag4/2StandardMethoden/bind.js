var button = {
    handler : null,
    onClick : function(handler){
        this.handler = handler;
    },
    click : function(miep){
        this.handler(miep);
    }
}

var handler = {
    log : function(miep){
        console.log("im log geklickt! "+miep);
    },
    handle : function(miep){
        this.log(miep);
    }
}

var foo = {
    log: function(miep){
        console.log("BÄHM" + miep);
    }
}

button.onClick(handler.handle.bind(foo));
button.click(":)");

handler.handle.call(foo, ":)");
handler.handle.apply(foo, [":)"]);

var max = Math.max(1,2,3,4,5,6);
console.log(max);

var max2 = Math.max.apply(null, [1,2,3,4]);
console.log(max2);