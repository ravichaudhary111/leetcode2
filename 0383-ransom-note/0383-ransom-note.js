/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    let map = new Map();
    for (let ele of magazine) {
        map.set(ele, (map.get(ele) || 0) + 1)
    }
    for (let ele of ransomNote) {
        if ( !map.has(ele) || map.get(ele) <= 0) return false;
        map.set(ele, map.get(ele) - 1)
    }
    return true;
};