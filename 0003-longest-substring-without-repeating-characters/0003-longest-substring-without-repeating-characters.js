/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let i = 0;
    let j = 0;
    let max = 0;
    while (j < s.length) {
        while (set.has(s[j])) {
            set.delete(s[i]);
            i++;
        }
        set.add(s[j]);
        max = Math.max(max, j + 1 - i)
        j++;
    }
    return max;
};