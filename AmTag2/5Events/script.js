$(function(){
    // Explizit
    $("#btn1").on("mousemove", function(e){
        $("#pnl").text(e.clientX + "/"+e.clientY)
    });

    //$('#btn1').off("click");

    $('#btn1').one("click",function(){
        alert("FOOO");
    });


    // Convenience Methods
    $('#btn1').mouseenter(function(){
        console.log("bin da...");
    })

    $('#btn1').mouseleave(function(){
        console.log("und wieder weg...")
    });
});