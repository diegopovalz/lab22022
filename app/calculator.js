'use strict';

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return new Error("No puede dividir por 0");
    }
    return a / b;
}

export default {
    add,
    minus,
    multiply,
    divide
}