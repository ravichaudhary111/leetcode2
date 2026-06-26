/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, [str]);
        } else {
            const val = map.get(key);
            map.set(key, [...val, str]);
        }
    }
    return [...map.values()]
};