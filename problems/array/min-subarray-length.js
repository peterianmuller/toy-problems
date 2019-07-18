// I -> arr of positive ints, positive int
// O -> min length of a contigious subarray of which the sum is greater than or equal to in passed to function

// [2,3,1,2,4,3], 7 // 2 b/c [4,3] is the shortest array that when added up becomes 7
//  s
//  e
// initialize start at 0 and end at 1
// initialize shortestLength to be Infinity
// initialize windowSum to 0
// if arr.length is 1
// if element is equal to or greater than target return one
// else return 0
// create first window: increment windowSum by array at start and array at end
// while start is less than arr.length
// if windowSum is less than target
// increment end and increment windowSum by element at end
// else
// if end - start + 1 is less than shortestLength reassign shortestLength to end - start + 1
// subtract element at start from windowSum
// increment start

// console.log(`windowLength is: ${windowLength}`);
// console.log(`windowSum is: ${windowSum}`);
// console.log(`end is: ${end}`);
// console.log(`start is: ${start}`);

// need to figure out how to deal with out of bounds end

module.exports = (arr, target) => {
	let start = 0,
		end = 1,
		shortest = Infinity,
		windowSum = 0;
	if (arr.length === 1) {
		return arr[0] < target ? 0 : 1;
	}
	windowSum = arr[start] + arr[end];
	while (start < arr.length) {
		if (isNaN(windowSum)) break;
		if (windowSum < target) {
			end++;
			windowSum += arr[end];
		} else {
			let windowLength = end - start + 1;
			if (windowLength < shortest) {
				shortest = windowLength;
			}
			windowSum -= arr[start];
			start++;
		}
	}
	return shortest === Infinity ? 0 : shortest;
};

