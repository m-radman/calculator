function add(nums) {
    return nums.reduce((total, num) => total += num, 0);
};

function subtract(nums) {
    return nums.reduce((total, num) => total -= num,);
};

function multiply(nums) {
    return nums.reduce((total, num) => total *= num, 1);
};

function divide(nums) {
    return nums.reduce((total, num) => total /= num,);
};

function operate(x, operator, y) {
    let n;

    if (operator === "+") {
        n = add([x, y]);
        return parseFloat(n.toFixed(2));
    }
    else if (operator === "-") {
        n = subtract([x, y]);
        return parseFloat(n.toFixed(2));
    }
    else if (operator === "*") {
        n = multiply([x, y]);
        return parseFloat(n.toFixed(2));
    }
    else if (operator === "/") {
        n = divide([x, y]);
        return parseFloat(n.toFixed(2));
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

document.getElementById("result").addEventListener("click", () => {
    let displayText = display.textContent;
    let sliceIndex = displayText.search(/[+-\/\*]/);
    let x = Number(displayText.slice(0, sliceIndex));
    console.log(x);
    let oper = displayText.slice(sliceIndex, sliceIndex + 1);
    let y = Number(displayText.slice(sliceIndex + 1));
    display.textContent = operate(x, oper, y);
});

document.getElementById("clear").addEventListener("click", () => {
    display.textContent = "";
});