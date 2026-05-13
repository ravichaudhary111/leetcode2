/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    let n = nums.length - 1;
    rotateArray(nums, 0, n - k);
    rotateArray(nums, n - k + 1, n);
    rotateArray(nums, 0, n);
    return nums;
};

const rotateArray = (arr, i, j) => {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}