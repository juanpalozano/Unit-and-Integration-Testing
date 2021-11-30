import'@testing-library/jest-dom';
import { getGreeting } from '../../base/01-template-strings.js';

describe('Test File: 01-template-string.js', () => {
    test('getGreeting. Must return: Hello var "param name"', () => {
        const name = 'Juan Pablo';
        const greeting = getGreeting(name);
        expect(greeting).toBe(`Hello ${name}`);
    });
    test('getGreeting default params. Must return: Hello Diana', () => {
        const greeting = getGreeting();
        expect(greeting).toBe(`Hello Diana`);
    });
});