/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let max = 0;
    let val = 0;

    for (let step of gain) {
        val += step;
        max = Math.max(val, max);
    }
    return max;
};