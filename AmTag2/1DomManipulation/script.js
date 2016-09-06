var personIdCounter = 1;
var persons = new Array();

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.id = personIdCounter;
    personIdCounter++;
}

function removePersonClick(){
    var id = this.dataset.id;
    for(var i = 0; i < persons.length; i++){
        if(persons[i].id == id)
        {
            persons.splice(i, 1);
            break;
        }
    }
    fillPersonTable();
}

function fillPersonTable() {
    var table = document.getElementById("tableData");
    table.innerHTML = "";
    for (var i = 0; i < persons.length; i++) {
        table.insertAdjacentHTML('beforeend', '<tr><td>'+persons[i].id+'</td><td>'+persons[i].name+'</td><td>'+persons[i].age+'</td><td><button id="btnPerson'+persons[i].id+'" data-id="'+persons[i].id+'">Löschen</button></td></tr>');
        var btn = document.getElementById("btnPerson"+persons[i].id);
        btn.onclick = removePersonClick;
    }
}

window.onload = function () {
    persons.push(new Person("David", 32));
    persons.push(new Person("Lena", 29));
    persons.push(new Person("Maximilian", 3));
    persons.push(new Person("Hasi", 2));
    fillPersonTable();

    var btnAdd = document.getElementById("btnAdd");
    btnAdd.onclick = function () {
        var name = document.getElementById("tbName").value;
        var alter = document.getElementById("tbAge").value;
        var person = new Person(name, alter);
        persons.push(person);
        fillPersonTable();
    }
};
