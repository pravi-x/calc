
function add (a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error! div/0";
    }
    return a / b;
}

function operate (operator,a,b){
    switch (operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);               
    }
}

document.addEventListener("DOMContentLoaded", function() {

    // Get the result div
    const result = document.querySelector("#result");

    // Get all buttons and add event listeners to them
    const buttons = document.querySelectorAll("button");

    const operators = ["/", "*", "-", "+", "="];
    const specialBtns = ["CE", "DEL"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const MAX_DISPLAY = 14;

    // Helper function to limit display length
    const updateResult = (content) => {
        if (content.length > MAX_DISPLAY) {
            content = content.slice(0, MAX_DISPLAY); // Limit display to MAX_DISPLAY
        }
        result.textContent = content;
    };

    let currentInput = "";  // Store the current input
    let operator = "";
    let number1 = "";
    let number2 = ""

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonContent = button.textContent;

            if (specialBtns.includes(buttonContent)) {
                // Handle special buttons (CE, DEL)
                if (buttonContent === "DEL") {
                    currentInput = currentInput.slice(0, -1); // Remove last character
                } else if (buttonContent === "CE") {
                    currentInput = ""; // Clear the input
                    number1 = "";
                    number2 = "";
                    operator = "";
                }
            } else if (numbers.includes(buttonContent)) {
                // Add number to the current input
                currentInput += buttonContent;
            } else if (operators.includes(buttonContent)) {
                if (number1 === "") {
                    // Store the first number and the operator
                    number1 = parseFloat(currentInput);
                    operator = buttonContent;
                    currentInput = "";
                } else if (currentInput !== "") {
                    // Store the second number and perform the operation
                    number2 = parseFloat(currentInput);
                    currentInput = operate(operator, number1, number2).toString();
                    number1 = parseFloat(currentInput);
                    number2 = "";
                    operator = buttonContent;  // Update operator for next operation
                }
            } else if (buttonContent === "=") {
                if (number1 !== "" && currentInput !== "") {
                    // Perform final operation on the stored numbers
                    number2 = parseFloat(currentInput);
                    currentInput = operate(operator, number1, number2).toString();
                    number1 = "";
                    number2 = "";
                    operator = "";
                }
            }
            updateResult(currentInput);  // Update the result display
        });
    });
});

