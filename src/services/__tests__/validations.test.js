// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });
});

describe('Leap Year Validation', () => {
    test('should return true for years divisible by 400', () => {
        expect(isValid(2000)).toBe(true);
    });
});

test('should return false for years divisible by 100 but not by 400', () => {
    expect(isValid(1900)).toBe(false);
    expect(isValid(2100)).toBe(false);
});

