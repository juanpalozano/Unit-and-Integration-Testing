import'@testing-library/jest-dom';
import { returnArray } from '../../base/03-array-destructuring.js';

describe('Test File: 03-array-destructuring.js', () => {
    test('returnArray. Must return: An array with a string and a number.', () => {
        const [letters, numbers] = returnArray();

        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');
        
        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    });
});