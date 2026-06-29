/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let count = 0

    for (let str of patterns) {
        if (word.includes(str)) {
            count++;
        }
    }
    return count;
};