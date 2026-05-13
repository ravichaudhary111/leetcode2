/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = j = 1;
    while (j < nums.length) {
        if (nums[i - 1] != nums[j]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;

};