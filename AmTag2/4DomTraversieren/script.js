$(function(){
    $("#parentDiv").children().attr("style","background: yellow;");
    $("#parentDiv").parent().attr("style","background: gray; font-size: 200%;");

    $('#middleDiv').text("middle").prev().text("first").next().next().text("last");
});
