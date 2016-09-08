"use strict";

$(function () {

    var repository = new PersonRepository();
    var persons = null;
    var idCounter = 1;

    function loadData() {
        repository.getAll(function (data) {
            persons = data;
            fillTable();
        });
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

    function deletePersonConfirm() {
        var id = $(this).data("id");

        var person = repository.getById(id, function (person) {
            $('.lbPersonName').text(person.name)
            $('#deleteConfirmButton').data("id", id);
            $('#deleteConfirmModal').modal();
        });
    }

    function deletePersonClick() {
        var id = $(this).data("id");

        repository.remove(id, function () {
            $("tr#row" + id).hide(1000, function () {
                this.remove();
            });
        });
    }

    $('#deleteConfirmButton').click(deletePersonClick);

    $("#btnAdd").click(function () {
        var form = new FormValidator();

        var isInputValid = form.validateInput();
        if (!isInputValid) {
            return;
        }

        var person = new Person(0, form.name(), form.age());

        repository.add(person, function (id) {
            person.id = id;

            var row = createPersonDataRow(person);
            $("#tblPersons").append(row).children().last().hide().show(1000);
            $("button[data-id='" + person.id + "']").click(deletePersonConfirm);
        });
    });

    $("#tbSearch").keyup(function (e) {
        $('#tblPersons').children().removeClass("success");

        var searchPattern = $('#tbSearch').val();
        if (!searchPattern) {
            return;
        }

        var foundIds = persons.filter(function (item) {
            var containedInId = item.id.toString().indexOf(searchPattern) !== -1;
            var containedInName = item.name.indexOf(searchPattern) !== -1;
            var containedInAge = item.age.toString().indexOf(searchPattern) !== -1;
            return containedInId || containedInName || containedInAge;
        }).map(function (item) {
            return item.id;
        });
        foundIds.forEach(function (id) {
            $('#row' + id).addClass("success");
        });
    });

    loadData();
});