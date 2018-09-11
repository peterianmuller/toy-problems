// Given an array, figure out how many elements need to be added to make the array have sequential elements thta increase by 1.

// constraints
// 1 ≤ statues.length ≤ 10
// 0 ≤ statues[i] ≤ 20

makeArrayConsecutive = arr => {
	// dealing with arr of length 1

	if (arr.length === 1) {
		if (!arr[0]) {
			return 0;
		} else {
			return arr[0] - 1;
		}
	}

	// dealing with 2 or more lengths
	return Math.max(...arr) - Math.min(...arr) + 1 - arr.length;
};

module.exports = makeArrayConsecutive;
