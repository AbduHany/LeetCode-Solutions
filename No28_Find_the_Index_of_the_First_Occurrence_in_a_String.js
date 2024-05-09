/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) {
        return (-1);
    }
    let flag;
    for (let i = 0; i < haystack.length; i++) {
        flag = 1;
        if (haystack[i] != needle[0]) {
            continue;
        }
        for (let j = i, k = 0; j < haystack.length && k < needle.length; j++, k++) {
            if (haystack[j] != needle[k]) {
                flag = 0;
                break;
            }
            else if (j == (haystack.length - 1) && k < (needle.length - 1)) {
                return (-1);
            }
        }
        if (flag == 1) {
            return (i);
        }
    }
    return (-1);
};