/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs = strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length) {
        if (first[i] === last[i]) i++
        else
            break;
    }
    return first.slice(0, i);
};