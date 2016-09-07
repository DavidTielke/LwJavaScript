"use strict";

$(function () {

    var persons = new Array();
    var idCounter = 1;

    function Person(name, age) {
        this.id = idCounter++;
        this.name = name;
        this.age = age;
    }

    function createPersonDataRow(person) {
        var row = "<tr id='row" + person.id + "'>";
        row += "<td>" + person.id + "</td>";
        row += "<td>" + person.name + "</td>";
        row += "<td>" + person.age + "</td>";
        row += "<td><button class='btn btn-xs btn-default deleteButton' data-id='" + person.id + "'><span class='glyphicon glyphicon-remove'></span></td>";
        row += "</tr>";
        return row;
    }

    function fillTable() {
        $('#tblPersons').empty();
        persons.forEach(function (person) {
            var row = createPersonDataRow(person);
            $('#tblPersons').append(row);
        });
        $('.deleteButton').click(deletePersonConfirm);
    }

    function deletePersonConfirm(){
        var id = $(this).data("id");

        var person = persons.filter(function(person){ 
            return person.id == id;
         })[0];
        $('.lbPersonName').text(person.name)
        $('#deleteConfirmButton').data("id", id);
        $('#deleteConfirmModal').modal();
    }

    function deletePersonClick() {
        var id = $(this).data("id");
        persons = persons.filter(function (person) {
            return person.id != id;
        });
        $("tr#row" + id).hide(1000, function () {
            this.remove();
        });
    }

    $('#deleteConfirmButton').click(deletePersonClick);

    $("#btnAdd").click(function () {
        var form = new FormValidator();

        var isInputValid = form.validateInput();
        if (!isInputValid) {
            return;
        }

        var person = new Person(form.name(), form.age());
        persons.push(person);
        var row = createPersonDataRow(person);
        $("#tblPersons").append(row).children().last().hide().show(1000);
        $("button[data-id='" + person.id + "']").click(deletePersonClick);
    });

    persons.push(new Person("David", 32));
    persons.push(new Person("Lena", 29));
    persons.push(new Person("Maximilian", 3));
    persons.push(new Person("Hasi", 2));
    fillTable();
});