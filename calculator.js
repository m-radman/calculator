function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function operate(x, operator, y) {
    let n;

    if (operator === "+") {
        n = add(x, y);
        return n;
    }
    else if (operator === "-") {
        n = subtract(x, y);
        return n;
    }
    else if (operator === "*") {
        n = multiply(x, y);
        return n;
    }
    else if (operator === "/") {
        n = divide(x, y);
        return n;
    };
};

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        display.textContent += operator.textContent;
    });
});

document.getElementById("=").addEventListener("click", () => {
    let displayText = display.textContent;
    let sliceIndex = displayText.search(/[+-\/\*]/);
    let x = Number(displayText.slice(0, sliceIndex));
    let oper = displayText.slice(sliceIndex, sliceIndex + 1);
    let y = Number(displayText.slice(sliceIndex + 1));
    display.textContent = operate(x, oper, y);
});