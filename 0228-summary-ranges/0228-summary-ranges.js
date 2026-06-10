/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let arr = [];
    let start = null;
    let end = null;
    for (let i = 0; i < nums.length; i++) {
        if (start === null)
            start = nums[i];
        else {
            end = nums[i];
        }
        if ((i < nums.length && nums[i] + 1 !== nums[i + 1]) || (i === (nums.length - 1))) {
            let str = end!==null ? `${start}->${end}` : `${start}`;
            arr.push(str);
            start = null;
            end = null;
        }
    }
    return arr;
};