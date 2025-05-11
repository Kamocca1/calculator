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
    return a / b;
}

let operandA;
let operator;
let operandB;

function operate(operator, a, b) {
    if (operator.toString() === "+") {
        return add(a, b);
    } else if (operator.toString() === "-") {
        return subtract(a, b);
    } else if (operator.toString() === "*") {
        return multiply(a, b);
    } else if (operator.toString() === "/") {
        return divide(a, b);
    }
}
