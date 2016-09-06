$(function(){
    $("#div1").attr("style","border-radius: 25px;");
    var style = $('#div1').attr("style");

    $("#div1").html("<b>Fooo</b>");

    $('#div1').text("<b>Bar</b>");

    $("#div1").empty();

    $("#div1").html($("#div1").data("foo"));
});