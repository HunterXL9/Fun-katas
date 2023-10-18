const calculateDivisors = require('../calculate-divisors.js');

describe('Tests for calculateDivisors', () => {

    test('sum of multiples below 1', () => {
        expect(calculateDivisors(1)).toBe(0);
    });

    test('sum of multiples below 5', () => {
        expect(calculateDivisors(5)).toBe(3);
    });

    test('sum of multiples below 6', () => {
        expect(calculateDivisors(6)).toBe(8);
    });

    test('sum of multiples below 10', () => {
        expect(calculateDivisors(10)).toBe(23);
    });

    test('sum of multiples below 12', () => {
        expect(calculateDivisors(12)).toBe(33);
    });

});
