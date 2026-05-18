/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const totalGas = gas.reduce((cur, acc) => { return cur + acc }, 0)
    const totalCost = cost.reduce((cur, acc) => { return cur + acc }, 0)
    if (totalGas < totalCost) return -1;
    let index = 0;
    let tgas = 0;
    for (let i = 0; i < gas.length; i++) {
        tgas += (gas[i] - cost[i]);
        if (tgas < 0) {
            index = i + 1;
            tgas = 0;
        }
    }
    return index;
};