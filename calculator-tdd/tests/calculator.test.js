import Calculator from "./calculator.js";

describe("Calculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test("Additionne deux nombres", () => {
        const result = calculator.add(2, 3);
        expect(result).toBe(5);
    });
});