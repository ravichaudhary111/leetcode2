/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
    const freq = new Map();

    // Count frequency
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let ans = 1;

    // Handle 1 separately
    if (freq.has(1)) {
        const count = freq.get(1);
        ans = count % 2 === 0 ? count - 1 : count;
    }

    // Try every unique number except 1
    for (const [num] of freq) {
        if (num === 1) continue;

        let curr = num;
        let len = 0;

        while (freq.get(curr) >= 2) {
            len += 2;

            // Prevent overflow (optional)
            if (curr > Number.MAX_SAFE_INTEGER / curr) break;

            curr = curr * curr;
        }

        if (freq.has(curr) && freq.get(curr) === 1) {
            len += 1;
        } else if (len > 0) {
            len -= 1;
        }

        ans = Math.max(ans, len);
    }

    return ans;
};