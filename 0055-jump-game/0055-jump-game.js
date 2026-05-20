/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let i = nums.length - 1;
    let lastIndex = nums.length - 1;
    while (i >= 0) {
        if (i + nums[i] >= lastIndex) {
            lastIndex = i;
        }
        i--;
    }
    return lastIndex === 0 ? true : false;
};