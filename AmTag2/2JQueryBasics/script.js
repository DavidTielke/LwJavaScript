$(document).ready(function(){
    $("div").hide();

    $("#btnClick").click(function(){
        $("div").show(2000);
        $("div").html("<h1>Test</h1><p>sdasdasdasd</p>");
        $("div").hide(1000);
    });
});

var persons = new Array();
