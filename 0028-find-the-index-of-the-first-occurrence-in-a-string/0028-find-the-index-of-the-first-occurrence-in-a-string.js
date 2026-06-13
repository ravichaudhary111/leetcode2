/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.length < needle.length) return -1;
    let i = 0;
    let j = 0;
    let index = -1;
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            if (index === -1) index = i;
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
            index = -1;
        }
    }
    return j === needle.length ? index : -1;
};