/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = '';
    s = s.toLowerCase();
    for (let ele of s) {
          if (((ele >= 'a' && ele <= 'z') || (ele >= 0 && ele <= 9)) && ele !==' ') {            
            str += ele;  
        }
    }
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;

};
