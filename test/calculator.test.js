'use strict';

import { expect } from 'chai';
import calculator from '../app/calculator.js';

describe('Calculator', function () {
    describe('Operations', function () {
        it('should sum two numbers', function () {
            expect(calculator.add(1, 1)).to.equal(1 + 1);
        });
        it('should subtract two numbers', function () {
            expect(calculator.minus(1, 1)).to.equal(1 - 1);
        });
        it('should multiply two numbers', function () {
            expect(calculator.multiply(1, 1)).to.equal(1 * 1);
        });
        it('should divide two numbers', function () {
            expect(calculator.divide(2, 1)).to.equal(2 / 1);
        });
        it('should not divide two numbers when second is 0', function () {
            const expectedError = new Error("No puede dividir por 0");
            expect(calculator.divide(2, 0).message).to.equal(expectedError.message);
        });
    })
});
