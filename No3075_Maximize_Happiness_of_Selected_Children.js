/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let sorted = happiness.toSorted(function(a, b){return a - b}).toReversed();
    let sadness = 0, happinesssum = 0;
    for (let i = 0; i < k; i++) {
        let val = (sorted[i] - sadness);
        if (val < 0)
            val = 0;
        happinesssum += val;
        sadness++;
    }
    return (happinesssum);
};