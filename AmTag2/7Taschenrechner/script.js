$(function () {
    var lastNumber = 0;
    var actualNumber = null;
    var operator = null;
    var resultIsDisplayed = false;

    function displayNumber() {
        $("#tbDisplay").val(actualNumber == null ? 0 : actualNumber);
    }

    function calculate() {
        var result = 0;
        var num1 = parseFloat(lastNumber);
        var num2 = parseFloat(actualNumber);
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            case "*":
                result = num1 * num2;
                break;
        }
        actualNumber = lastNumber = result;
        resultIsDisplayed = true;
    }


    $(".numbutton").click(function () {
        var value = $(this).data("num");

        if (resultIsDisplayed) {
            actualNumber = "";
            lastNumber = 0;
            resultIsDisplayed = false;
        }

        if (actualNumber == null) {
            actualNumber = value;
        } else {
            actualNumber += value + "";
        }
        displayNumber();
    });

    $('.calcbutton').click(function () {
        var op = $(this).data("op");

        if (resultIsDisplayed) {
            actualNumber = "";
            resultIsDisplayed = false;
        }
        else {
            if (op == "=") {
                calculate();
            }
            else {
                lastNumber = actualNumber;
                actualNumber = "";
                operator = op;
            }
        }

        displayNumber();
    });

});