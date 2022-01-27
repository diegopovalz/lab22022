import { question } from 'readline-sync';
import calculator from '../app/calculator.js';

const firstNum = question('Deme el primer numero: ');
const secondNum = question('Deme el segundo numero: ');
const a = parseInt(firstNum);
const b = parseInt(secondNum);

console.log(`Adding ${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`Removing ${a} - ${b} = ${calculator.minus(a, b)}`);
console.log(`Multiplying ${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`Dividing ${a} / ${b} = ${calculator.divide(a, b)}`);