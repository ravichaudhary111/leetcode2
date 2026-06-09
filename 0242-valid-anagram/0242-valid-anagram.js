/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map = new Map();
    if (s.length !== t.length) return false;
    for (let ele of s) {
        map.set(ele, (map.get(ele) || 0) + 1)
    }
    for (let ele of t) {
        if (!map.has(ele) || map.get(ele) <= 0) return false;
        map.set(ele, (map.get(ele) - 1))
    }
    return true;
};