import Calculator from "../src/calculator.js";

describe("Calculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test("Additionne deux nombres", () => {
        const result = calculator.add(2, 3);
        expect(result).toBe(5);
    });

    test('should subtract two numbers correctly', () => {
        const result = calculator.subtract(5, 3);
        expect(result).toBe(2);
    });

    test('should handle negative results', () => {
        const result = calculator.subtract(3, 5);
        expect(result).toBe(-2);
    });

    test('should multiply two numbers correctly', () => {
        const result = calculator.multiply(4, 5);
        expect(result).toBe(20);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    test("Division par 2", () => {
        const result = calculator.divide(10, 2);
        expect(result).toBe(5);
    });

});