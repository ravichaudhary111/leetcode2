/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let val = nums[0];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count = val === nums[i] ? ++count : --count;

    if (count <= 0) {
      val = nums[i];
      count=1;
    }
  }
  return val;
};
