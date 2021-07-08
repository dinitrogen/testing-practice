const encryptStr = require('./caesar')

test('Encrypts a lowercase word: "hello" to "ifmmp"', () => {
    expect(encryptStr('hello', 1)).toBe('ifmmp');
});

test('Wraps a-z correctly', () => {
    expect(encryptStr('hello', 20)).toBe('byffi');
});

test('Encrypts a sentence (preserves capitalization and punctuation)', () => {
    expect(encryptStr('Hello world!', 1)).toBe('Ifmmp xpsme!');
});