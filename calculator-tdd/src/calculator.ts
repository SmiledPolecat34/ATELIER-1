export default class Calculator {
    private static assertNumbers(...values: unknown[]): void {
        for (const v of values) {
            if (typeof v !== 'number' || Number.isNaN(v)) {
                throw new TypeError(`Argument non valide: ${v}`);
            }
        }
    }

    add(...args: number[]): number {
        Calculator.assertNumbers(...args);
        return args.reduce((sum, n) => sum + n, 0);
    }

    subtract(...args: number[]): number {
        Calculator.assertNumbers(...args);
        if (args.length === 0) return 0;
        if (args.length === 1) return -args[0];
        return args.slice(1).reduce((res, n) => res - n, args[0]);
    }

    multiply(...args: number[]): number {
        Calculator.assertNumbers(...args);
        return args.reduce((prod, n) => prod * n, 1);
    }

    divide(...args: number[]): number {
        Calculator.assertNumbers(...args);
        if (args.length === 0) {
            throw new Error('Au moins un argument requis pour la division');
        }
        return args.slice(1).reduce((res, n) => {
            if (n === 0) throw new RangeError('Division par zéro interdite');
            return res / n;
        }, args[0]);
    }

    static add(...args: number[]): number {
        return new Calculator().add(...args);
    }
    static subtract(...args: number[]): number {
        return new Calculator().subtract(...args);
    }
    static multiply(...args: number[]): number {
        return new Calculator().multiply(...args);
    }
    static divide(...args: number[]): number {
        return new Calculator().divide(...args);
    }
}
