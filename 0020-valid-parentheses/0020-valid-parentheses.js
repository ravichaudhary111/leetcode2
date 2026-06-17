/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];
    for (let ele of s) {
        if (ele === "(" || ele === "{" || ele === "[") {
            arr.push(ele);
        } else {
            if (
                !arr.length ||
                (ele === ")" && arr[arr.length - 1] !== "(") ||
                (ele === "}" && arr[arr.length - 1] !== "{") ||
                (ele === "]" && arr[arr.length - 1] !== "[")
            ) {
                return false;
            }
            arr.pop();
        }
    }
    return arr.length === 0;
};
