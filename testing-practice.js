function capitalize(string) {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);

    return newString
}

function reverseString(string) {
    let newString = '';
    [...string].forEach(letter => {
        newString = letter.concat(newString);
    });
    return newString;
}

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return Math.round(a / b * 1000) / 1000;
    },
    multiply: function (a, b) {
        return Math.round(a * b * 1000) / 1000;
    },
}



module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = calculator;
