const analyzeArray = require('./array-analysis');

test('Analyzes an array of integers', () => {
    expect(analyzeArray([1, 2, 3, 1, 4])).toStrictEqual({
        average: 2.2,
        min: 1,
        max: 4,
        length: 5
    })
});