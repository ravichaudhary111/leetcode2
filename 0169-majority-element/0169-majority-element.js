/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let val = nums[0];
    let count = 0;

    for (let num of nums) {
        count = val === num ? ++count : --count;
        if (count <= 0) {
            val = num;
            count = 1;
        }
    }
    return val;
};
