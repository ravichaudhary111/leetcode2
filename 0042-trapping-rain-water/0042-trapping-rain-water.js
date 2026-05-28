/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let res = 0;
    let l = 0;
    let r = height.length - 1;
    let lMax = height[0];
    let rMax = height[height.length - 1];
    while (l < r) {
        if (height[l] < height[r]) {
            l++;
            if (height[l] < lMax) {
                res += (lMax - height[l]);
            } else {
                lMax = height[l];
            }
        } else {
            r--;
            if (height[r] < rMax) {
                res += (rMax - height[r]);
            } else {
                rMax = height[r];
            }
        }
    }
    return res;
};