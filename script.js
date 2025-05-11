function add(a, b) {
    let result = Number(a) + Number(b);
    if (Number(result) === result && result % 1 !== 0) {
        result = Math.round(result * 1e7) / 1e7;
    }
    return result;
}

function subtract(a, b) {
    let result = Number(a) - Number(b);
    if (Number(result) === result && result % 1 !== 0) {
        result = Math.round(result * 1e7) / 1e7;
    }
    return result;
}

function multiply(a, b) {
    let result = Number(a) * Number(b);
    if (Number(result) === result && result % 1 !== 0) {
        result = Math.round(result * 1e7) / 1e7;
    }
    return result;
}

function divide(a, b) {
    if (Number(b) === 0) {
        return "Can't divide by 0 genius";
    }
    let result = Number(a) / Number(b);
    if (Number(result) === result && result % 1 !== 0) {
        result = Math.round(result * 1e7) / 1e7;
    }
    return result;
}

let operandA;
console.log("🚀 ~ operandA:", operandA);
let operatorMain;
console.log("🚀 ~ operatorMain:", operatorMain);
let operandB;
console.log("🚀 ~ operandB:", operandB);
let displayValue = "";
console.log("🚀 ~ displayValue:", displayValue);
let justCalculated = false;
console.log("🚀 ~ justCalculated:", justCalculated);

function operate(operator, a, b) {
    if (operator.toString() === "+") {
        return add(a, b);
    } else if (operator.toString() === "-") {
        return subtract(a, b);
    } else if (operator.toString() === "×") {
        return multiply(a, b);
    } else if (operator.toString() === "÷") {
        return divide(a, b);
    }
}

const operandButtons = document.querySelectorAll(".operand");
console.log("🚀 ~ operandButtons:", operandButtons);

const display = document.querySelector(".display");
console.log("🚀 ~ display:", display);

function updateDisplay(digit) {
    if (justCalculated) {
        // A new digit after a calculation: start fresh
        displayValue = "";
        justCalculated = false;
    }
    displayValue += digit.toString();
    display.textContent = displayValue;
}

operandButtons.forEach((operand) => {
    operand.addEventListener("click", (e) => {
        updateDisplay(e.target.textContent);
    });
});

const operatorButtons = document.querySelectorAll(".operator");
console.log("🚀 ~ operatorButtons:", operatorButtons);

function setOperandA(a) {
    operandA = a.toString();
    console.log("🚀 ~ setOperandA ~ operandA:", operandA);
}

operatorButtons.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if (operandA && operatorMain && !operandB) {
            operandB = displayValue;
            let result = operate(operatorMain, operandA, operandB);
            displayValue = result.toString();
            display.textContent = displayValue;
            operandA = displayValue; // chain it forward
            justCalculated = true;
        } else if (operandA && operatorMain && operandB) {
            let result = operate(operatorMain, operandA, operandB);
            displayValue = result;
            setOperandA(result);
            operandB = "";
            operatorMain = e.target.textContent;
            display.textContent = displayValue;
            justCalculated = true;
        } else {
            operatorMain = e.target.textContent;
            console.log(
                "🚀 ~ operator.addEventListener ~ operatorMain:",
                operatorMain
            );
            setOperandA(displayValue);
            displayValue = "";
            console.log(
                "🚀 ~ operator.addEventListener ~ displayValue:",
                displayValue
            );
            display.textContent = displayValue;
        }
    });
});

const equalsButton = document.querySelector("#equals");
console.log("🚀 ~ equalsButton:", equalsButton);

function setOperandB(b) {
    operandB = b.toString();
    console.log("🚀 ~ setOperandB ~ operandB:", operandB);
}

equalsButton.addEventListener("click", (e) => {
    if (!operandA || !operatorMain) {
        console.log(
            "🚀 ~ equalsButton.addEventListener ~ displayValue:",
            displayValue
        );
        return;
    }
    setOperandB(displayValue);
    let result = operate(operatorMain, operandA, operandB);
    displayValue = result;
    console.log(
        "🚀 ~ equalsButton.addEventListener ~ displayValue:",
        displayValue
    );
    display.textContent = displayValue;
    operandA = "";
    console.log("🚀 ~ equalsButton.addEventListener ~ operandA :", operandA);
    operatorMain = "";
    console.log(
        "🚀 ~ equalsButton.addEventListener ~ operatorMain:",
        operatorMain
    );
    operandB = "";
    console.log("🚀 ~ equalsButton.addEventListener ~ operandB:", operandB);
    justCalculated = true;
});

const clearButton = document.querySelector("#clear");
console.log("🚀 ~ clearButton:", clearButton);

clearButton.addEventListener("click", (e) => {
    displayValue = "";
    operandA = "";
    operatorMain = "";
    operandB = "";
    display.textContent = "0";
});
