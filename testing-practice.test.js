const testingPractice = require('./testing-practice');


// capitalize tests
test('Capitalizes a single word: "hello" to "Hello"', () => {
    expect(testingPractice.capitalize('hello')).toBe('Hello');
});

test('Capitalizes the first letter of a sentence: "hello, how are you?" to "Hello, how are you?"', () => {
    expect(testingPractice.capitalize('hello, how are you?')).toBe('Hello, how are you?');
});

test('Does nothing if first character is a space', () => {
    expect(testingPractice.capitalize(' hello')).toBe(' hello');
});

// reverse string tests
test('Reverses a single word: "hello" to "olleh"', () => {
    expect(testingPractice.reverseString('hello')).toBe('olleh');
});

test('Reverses a sentence: "Hello, how are you?" to "?uoy era woh ,olleH"', () => {
    expect(testingPractice.reverseString('Hello, how are you?')).toBe('?uoy era woh ,olleH');
});

test('Reverses a number: "123456789" to "987654321"', () => {
    expect(testingPractice.reverseString('123456789')).toBe('987654321');
});

// calculator tests
test('Adds two integers: 1 + 2 = 3', () => {
    expect(testingPractice.calculator.add(1, 2)).toBe(3);
});

test('Subtracts two integers: 3 - 2 = 1', () => {
    expect(testingPractice.calculator.subtract(3, 2)).toBe(1);
});

test('Divides two integers and rounds to 3 places: 1 / 3 = 0.333', () => {
    expect(testingPractice.calculator.divide(1, 3)).toBe(0.333);
});

test('Multiplies two integers: 10 * 3 = 30', () => {
    expect(testingPractice.calculator.multiply(10, 3)).toBe(30);
});