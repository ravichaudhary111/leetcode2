/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let max = 0;
    for (let price of prices) {
        if (price > buy) {
            max = Math.max(max, (price - buy));
        } else {
            buy = price;
        }
    }
    return max;
};