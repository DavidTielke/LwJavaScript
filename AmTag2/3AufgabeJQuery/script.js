$(document).ready(function(){
    $("#btnShow").click(function(){
        var firstname = $("#tbFirstname").val();
        var lastname = $("#tbLastname").val();
        var fullname = firstname + " " + lastname;
        $("#pnlFullname").html("<h1> Hallo "+fullname+"</h1>");
    });
});