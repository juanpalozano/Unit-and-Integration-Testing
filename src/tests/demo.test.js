describe('Test in file demo.test.js', () => {
    test('Strings must be equals', () => {
        // 1. Start
        const string1 = 'Hello World';
    
        // 2. Incentive
        const string2 = 'Hello World';
    
        // 3. Behavior
        expect(string1).toBe(string2);
    });
});