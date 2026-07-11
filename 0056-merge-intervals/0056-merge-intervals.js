/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => { return (a[0] - b[0]) });
    let low = intervals[0][0];
    let high = intervals[0][1];
    let arr = [];
    for (let [start, end] of intervals) {

        if (high >= start) {
            high = Math.max(high, end)
        } else {
            arr.push([low, high])
            low = start;
            high = end;
        }

    }
    arr.push([low, high])
    return arr;
};