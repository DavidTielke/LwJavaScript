function PersonRepository() {

    var resUrl = "http://lwpersonmanager.azurewebsites.net/api/Persons";

    function mapPersonList(persons) {
        return persons.map(function (person) {
            return new Person(person.Id, person.Name, person.Age);
        });
    }

    this.getAll = function (dataLoaded) {
        $.get(resUrl, function (data) {
            var persons = mapPersonList(data);
            dataLoaded(persons);
        });
    }

    this.getById = function (id, dataLoaded) {
        $.get(resUrl+"/"+id, function (data) {
            var person = mapPersonList([data])[0];
            dataLoaded(person);
        });
    }

    this.remove = function (id, dataDeleted) {
        var options ={
            url : resUrl+"/Delete/"+id,
            method : "GET",
            success : dataDeleted
        }; 
        $.ajax(options);
    }

    this.add = function (person, dataStored) {
        $.ajax({
            url : resUrl,
            data : person,
            success: dataStored,
            method: "post"
        });
    }
}