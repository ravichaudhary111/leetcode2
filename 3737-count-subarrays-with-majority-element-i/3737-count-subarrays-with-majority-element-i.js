/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let currentCount = 0;

        for (j = i; j < nums.length; j++) {
            currentCount += (nums[j] === target) ? 1 : -1;

            if (currentCount > 0) count++;
        }
    }
    return count;
};