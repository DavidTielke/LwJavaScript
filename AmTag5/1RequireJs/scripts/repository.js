define(["validator"], function(validator){
   var data = ["aaa","123","1a2"];
    
    var load = function(){
        return data.map(function(date){
            return {
                date : date,
                valid : validator.validate(date)
            };
        });
    };

    return {
        load : load
    };
});