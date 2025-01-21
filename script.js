document.addEventListener("DOMContentLoaded", function() {

    // const buttons = Array.from(this.querySelectorAll("button"));
    // buttons.forEach( this.addEventListener, )

    const bt0 = document.querySelector("#bt0");

    // the result div
    const result = document.querySelector("#result");
    result.textContent = bt0.;
 });


function add (a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    try {
        return a/b;
    } catch (error) {
        return "ERROR"
    }
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