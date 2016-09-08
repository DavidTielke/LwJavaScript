function FormValidator() {

    function validateName(){
        var tbName = $('#tbName');
        var nameReg = /^([a-z]|[A-Z]){3,}$/;
        var nameValid = nameReg.test(tbName.val())
        if (!nameValid) {
            tbName.parent().addClass("has-error");
            tbName.popover({content: "Mindestens 3 Buchstaben.", placement: "bottom", trigger: "focus"});
        } else {
            tbName.parent().removeClass("has-error");
            tbName.popover("destroy");
        }
        return nameValid;
    }

    function validateAge(){
        var tbAge = $('#tbAge');
        var ageReg = /[0-9]+/;
        var ageValid = ageReg.test(tbAge.val());
        if (!ageValid) {
            tbAge.parent().addClass("has-error");
            tbAge.popover({content: "Eine Zahl größer 0.", placement: "bottom", trigger: "focus"});
        } else {
            tbAge.parent().removeClass("has-error");
            tbAge.popover("destroy");
        }
        return ageValid;
    }


    this.name = function () {
        return $('#tbName').val();
    };

    this.age = function () {
        return $('#tbAge').val();
    }

    this.validateInput = function () {
        var nameValid = validateName();
        var ageValid = validateAge();        

        return nameValid && ageValid;
    }
}