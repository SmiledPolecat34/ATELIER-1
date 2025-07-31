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

    test('Soustrait deux nombres', () => {
        const result = calculator.subtract(5, 3);
        expect(result).toBe(2);
    });

    test('Gère les résultats négatifs', () => {
        const result = calculator.subtract(3, 5);
        expect(result).toBe(-2);
    });

    test('Multiplie deux nombres correctement', () => {
        const result = calculator.multiply(4, 5);
        expect(result).toBe(20);
    });

    test('Lance une erreur lors d’une division par zéro', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    test("Division par 2", () => {
        const result = calculator.divide(10, 2);
        expect(result).toBe(5);
    });

});