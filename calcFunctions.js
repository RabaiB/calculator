function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "ERROR: Division by zero";
    }

    return a / b;
}

function clearMemory() {
    numbers.numberA = "";
    numbers.numberB = "";
    numbers.operator = "";
    numbers.allowSecondNumber = false;
    numbers.result = "";
}


function operate(numA, numB, operator) {
    let result;

        if (numA != "" && numB != "") {

            switch (operator) {
            case '+':
                result =  add(numA, numB)
                break;

            case '-':
                result = subtract(numA, numB);
                break;
                
            case '*':
                result = multiply(numA, numB);
                break;
                
            case '/':
                result = divide(numA, numB);
                break;                
        }
        }

    return result;
}