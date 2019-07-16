// I: array and integer n
// O: max sum of consecutive elements in array of length n

// declare variables maxSum set to 0, tempSum set to 0
// iterate from 0 to n - 1
// for each number increment tempSum
// iterate from n to end of array
// increment tempSum by array at current element and decrement tempSum by current index - n
// set maxSum to maxSum or tempSum, whichever is larger
// return maxSum

module.exports = (arr, n) => {
	if (n > arr.length) {
		return null;
	}
	let tempSum = 0,
		maxSum = 0;
	for (let i = 0; i < n; i++) {
		tempSum += arr[i];
	}
	console.log(`tempSum: ${tempSum}`);
	maxSum = tempSum;
	for (let i = n; i < arr.length; i++) {
		tempSum = tempSum + arr[i] - arr[i - n];
		console.log(`tempSum: ${tempSum}`);
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
};
