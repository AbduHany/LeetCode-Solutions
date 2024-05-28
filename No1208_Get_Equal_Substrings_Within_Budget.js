/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let count = 0;
    let begin = 0;
    let sum = 0;
    /* increase window's size from the right-side/end */
    for (let end = 0; end < s.length; end++) {
	let diff = Math.abs(s.charCodeAt(end) - t.charCodeAt(end));
	process.stdout.write(`${s[end]} - ${t[end]} = ${diff}\t`);
	sum += diff;
	/* decrease window's size from left-side/begin */
	while (sum > maxCost && begin < end) {
	    diff = Math.abs(s.charCodeAt(begin) - t.charCodeAt(begin));
	    process.stdout.write(`${s[begin]} - ${t[begin]} = ${diff}`);
	    sum -= diff;
	    begin++;
	}
	if (sum <= maxCost)
	    count = Math.max(count, end - begin + 1);
    }
    return (count);
};
