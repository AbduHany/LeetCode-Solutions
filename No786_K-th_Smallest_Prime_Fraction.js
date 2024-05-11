/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let fractions = [];
    let facdict = {};
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let div = arr[i] / arr[j];
            fractions.push(div);
            facdict[div] = arr[j];
        }
    }
    let sorted = fractions.sort(function(a, b) {return a - b;});
    k--;
    return([(sorted[k] * facdict[sorted[k]]),(facdict[sorted[k]])]);
};