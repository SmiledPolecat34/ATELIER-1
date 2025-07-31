export default class Calculator {
    /**
     * Vérifie que tous les arguments sont des nombres valides.
     * @private
     */
    static assertNumbers(...values) {
        for (const v of values) {
            if (typeof v !== 'number' || Number.isNaN(v)) {
                throw new TypeError(`Argument non valide: ${v}`);
            }
        }
    }
    /**
     * Additionne un nombre arbitraire d’opérandes.
     */
    add(...args) {
        Calculator.assertNumbers(...args);
        return args.reduce((sum, n) => sum + n, 0);
    }
    /**
     * Soustrait b de a, ou chaînage si plusieurs arguments.
     */
    subtract(...args) {
        Calculator.assertNumbers(...args);
        if (args.length === 0)
            return 0;
        if (args.length === 1)
            return -args[0];
        return args.slice(1).reduce((res, n) => res - n, args[0]);
    }
    /**
     * Multiplie un nombre arbitraire d’opérandes.
     */
    multiply(...args) {
        Calculator.assertNumbers(...args);
        return args.reduce((prod, n) => prod * n, 1);
    }
    /**
     * Divise a par b, ou chaînage si plusieurs arguments.
     * Lève RangeError si un diviseur vaut 0.
     */
    divide(...args) {
        Calculator.assertNumbers(...args);
        if (args.length === 0) {
            throw new Error('Au moins un argument requis pour la division');
        }
        return args.slice(1).reduce((res, n) => {
            if (n === 0)
                throw new RangeError('Division par zéro interdite');
            return res / n;
        }, args[0]);
    }
    // --- Méthodes statiques pour appel direct sans instance ---
    static add(...args) {
        return new Calculator().add(...args);
    }
    static subtract(...args) {
        return new Calculator().subtract(...args);
    }
    static multiply(...args) {
        return new Calculator().multiply(...args);
    }
    static divide(...args) {
        return new Calculator().divide(...args);
    }
}
