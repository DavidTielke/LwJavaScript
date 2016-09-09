define([],function(){
    var pattern = /^[0-9]*$/;

    var validate = function(input){
        return pattern.test(input);
    }
    
    return{
        validate : validate
    };
});