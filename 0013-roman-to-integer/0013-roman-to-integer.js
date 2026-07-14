/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let current = findInt(s[i]);
        let prev = 0;
        if (i + 1 < s.length) {
            prev = findInt(s[i + 1]);
        }
        if (current < prev) {
            sum -= current;
        } else {
            sum += current;
        }
    }
    return sum;
};

const findInt = (char) => {
    switch (char) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}