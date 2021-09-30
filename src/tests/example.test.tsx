import Number from "../models/Number";
import sum from "../components/Sum/Sum";

/**
 * test block
 */
describe('Unit tests', () => {

    // Parametrized input data
    const paramsValid: Number[][] = [
        [
            {a: 2, name: '2'},
            {a: 2, name: '2'},
            {a: 4, name: 'res: 2 + 2 = '}
        ]
    ];

    /**
     * Parametrized test. There is no need to do testing with other types,
     * because Typescript types fail in compilation time
     */
   test.each(paramsValid)('should return the sum of %p and %p and return %p', (a, b, res) => {
       expect(JSON.stringify(sum(a, b))).toBe(JSON.stringify(res));
    });
    
});

export {}