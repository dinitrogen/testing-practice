function encryptStr(str, shift) {
    let encryptedStr = '';
    [...str].forEach(char => {
        let encryptedChar = encryptChar(char, shift);
        encryptedStr = encryptedStr.concat(encryptedChar);
    });
    return encryptedStr;
}

function encryptChar(char, shift) {
    let charIndex = char.charCodeAt(0);
    let encryptedCharIndex;
    if (charIndex >= 65 && charIndex <= 90) {
        encryptedCharIndex = ((charIndex - 65 + shift) % 26) + 65;
    } else if (charIndex >= 97 && charIndex <= 122) {
        encryptedCharIndex = ((charIndex - 97 + shift) % 26) + 97;
    } else {
        encryptedCharIndex = charIndex;
    }
    let encryptedChar = String.fromCharCode(encryptedCharIndex);
    return encryptedChar;
}

// console.log(encryptStr('hello', 20));

module.exports = encryptStr;