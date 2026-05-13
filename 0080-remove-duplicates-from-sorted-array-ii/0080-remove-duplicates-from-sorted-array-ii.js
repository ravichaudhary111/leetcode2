/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = j = 2;

    while (j < nums.length) {
        if (nums[i - 2] !== nums[j]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};