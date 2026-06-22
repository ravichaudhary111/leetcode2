/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let b = 0, a = 0, l = 0, o = 0, n = 0;

    for (const ch of text) {
        if (ch === 'b') b++;
        else if (ch === 'a') a++;
        else if (ch === 'l') l++;
        else if (ch === 'o') o++;
        else if (ch === 'n') n++;
    }

    l = Math.floor(l / 2);
    o = Math.floor(o / 2);

    let ans = Math.min(b, a);
    ans = Math.min(ans, l);
    ans = Math.min(ans, o);
    ans = Math.min(ans, n);

    return ans;
};