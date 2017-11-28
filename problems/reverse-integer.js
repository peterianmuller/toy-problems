// Leetcode problem 7 - Reverse Integer

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output:  321

// Example 2:

// Input: -123
// Output: -321

// Example 3:

// Input: 120
// Output: 21

// Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows. 


module.exports = num => {
	if (isNaN(num)) {
		return null;
	}
	var negative = num < 0 ? true : false;
	var reversed = Number(num.toString().split('').reverse().join(''));
	return reversed;
}