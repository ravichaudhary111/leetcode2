/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let max = 0;
    let current;

    for (let num of set.values()) {
        if (set.has(num - 1)) continue;
        let count = 1;
        while (set.has(num + 1)) {
            num++;
            count++;
        }
        max = Math.max(max, count);
    }
    return max;
};
