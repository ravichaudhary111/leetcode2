/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    let arr = (new Array(150)).fill(0);
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let index = word.charCodeAt(i);
        arr[index] = 1;
    }
    for (let i = 65; i <= 90; i++) {
        if (arr[i] === 1 && arr[i + 32] === 1) {
            count++;
        }
    }
    return count;
};
