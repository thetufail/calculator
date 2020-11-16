var temp;
var operator = null;
var result = 0;
var count = 0;
var digit = "";
var count_equal = 0;

function calculate(input) {
    for (var i = 0; i <= 9; i++) {
        if (input == i) {
            digit += input;
            document.getElementById("display").innerText = digit;
            break;
        }
    }
    if (input == "+" || input == "-" || input == "*" || input == "/") {
        if (count < 1) {
            temp = (Number(digit));
            operator = input;
        } else if (count_equal > 0) {
            operator = input;
            count_equal -= 1;
        } else {
            if (operator == "+") {
                result = temp + Number(digit);
                temp = result;
                operator = input;
                document.getElementById("display").innerText = result;
            } else if (operator == "-") {
                result = temp - Number(digit);
                temp = result;
                operator = input;
                document.getElementById("display").innerText = result;
            } else if (operator == "*") {
                result = temp * Number(digit);
                temp = result;
                operator = input;
                document.getElementById("display").innerText = result;
            } else if (operator == "/") {
                result = temp / Number(digit);
                temp = result;
                operator = input;
                document.getElementById("display").innerText = result;
            }
        }
        count += 1;
        digit = "";
    }
    if (input == "=") {
        if (count >= 1) {
            if (operator == "+") {
                result = temp + Number(digit);
                temp = result;
                document.getElementById("display").innerText = result;
            } else if (operator == "-") {
                result = temp - Number(digit);
                temp = result;
                document.getElementById("display").innerText = result;
            } else if (operator == "*") {
                result = temp * Number(digit);
                temp = result;
                document.getElementById("display").innerText = result;
            } else if (operator == "/") {
                result = temp / Number(digit);
                temp = result;
                document.getElementById("display").innerText = result;
            }
        }
        digit = "";
        count_equal += 1;
    }
    if (input == "C") {
        temp = null;
        operator = null;
        result = 0;
        count = 0;
        count_equal = 0;
        digit = "";
        document.getElementById("display").innerText = "";
    }
}