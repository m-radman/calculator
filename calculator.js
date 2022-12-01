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

function operate(x, y, operator) {
    let n;

    if (operator === "+") {
        n = add(x, y);
        return parseFloat(n.toFixed(2));
    }
    else if (operator === "-") {
        n = subtract(x, y);
        return parseFloat(n.toFixed(2));
    }
    else if (operator === "*") {
        n = multiply(x, y);
        return parseFloat(n.toFixed(2));
    }
    else if (operator === "/") {
        if (y == 0) {
            return "TO INFINITY AND BEYOND"
        };
        n = divide(x, y);
        return parseFloat(n.toFixed(2));
    };
};

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let number1 = null;
let number2 = null;
let oper = null;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
        if (oper === null) {
            number1 = Number(display.textContent);
        }
        else if (number1 !== null && oper !== null) {
            number2 = Number(display.textContent);
        };
    });
    number.addEventListener("keypress", (event) => {
        if (isFinite(event.key)) {
            display.textContent += event.key;
            if (oper === null) {
                number1 = Number(display.textContent);
            }
            else if (number1 !== null && oper !== null) {
                number2 = Number(display.textContent);
            };
        };
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (number1 !== null && number2 !== null && oper !== null) {
            display.textContent = operate(number1, number2, oper);
            oper = operator.textContent;
            number1 = Number(display.textContent);
            number2 = null;
            display.textContent = "";
        }
        else {
            display.textContent = "";
            oper = operator.textContent;
        };
    });
});

document.getElementById("result").addEventListener("click", () => {
    display.textContent = operate(number1, number2, oper);
    oper = null;
    number1 = Number(display.textContent);
    number2 = null;
});

document.getElementById("clear").addEventListener("click", () => {
    display.textContent = "";
    number1 = null;
    number2 = null;
    oper = null;
});

document.getElementById("delete").addEventListener("click", () => {
    let correction = display.textContent.slice(0, -1);
    display.textContent = correction;
    if (oper === null) {
        number1 = Number(display.textContent);
    }
    else if (number1 !== null && oper !== null) {
        number2 = Number(display.textContent);
    };
});

document.getElementById("dot").addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
        display.textContent += document.getElementById("dot").textContent;
    };
});