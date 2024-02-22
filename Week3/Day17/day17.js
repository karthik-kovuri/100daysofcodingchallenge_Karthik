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
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Cannot divide by zero.";
    }
}


const input1 = parseFloat(prompt("Enter the first number:"));
const input2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /):");


let result;
switch (operation) {
    case "+":
        result = add(input1, input2);
        break;
    case "-":
        result = subtract(input1, input2);
        break;
    case "*":
        result = multiply(input1, input2);
        break;
    case "/":
        result = divide(input1, input2);
        break;
    default:
        result = "Invalid operation. Please enter +, -, *, or /.";
}

console.log(`Result: ${result}`);
