/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let max = nums.length + 1;
    while (j < nums.length) {
        sum += nums[j];
        while (sum >= target) {
            max = Math.min(max, j + 1 - i)
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return max === nums.length + 1 ? 0 : max;
};