import Calculator from '../src/calculator';

describe('Calculatrice', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('Additionne deux nombres', () => {
        expect(calc.add(2, 3)).toBe(5);
    });

    test('Soustrait correctement deux nombres', () => {
        expect(calc.subtract(5, 3)).toBe(2);
        expect(calc.subtract(3, 5)).toBe(-2);
    });

    test('Multiplie deux nombres', () => {
        expect(calc.multiply(4, 5)).toBe(20);
    });

    test('Divise deux nombres', () => {
        expect(calc.divide(10, 2)).toBe(5);
    });

    test('Lance une erreur pour division par zéro', () => {
        expect(() => calc.divide(5, 0)).toThrow(RangeError);
        expect(() => calc.divide(5, 0)).toThrow('Division par zéro interdite');
    });

    test('Lance TypeError si un argument n’est pas un nombre', () => {
        // @ts-expect-error: on force volontairement un mauvais type
        expect(() => calc.add(2, 'foo')).toThrow(TypeError);
    });
});
