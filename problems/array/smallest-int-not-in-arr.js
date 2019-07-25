// I: arr
// O: Number, the smallest number not in the array

// two versions:
// Version 1
// declare new variable sortedArr set to a copy of arr sorted
// iterate over sortedArr
// if current element is not equal to index number return current index
// return i

module.exports = arr => {
	let sortedArr = arr.sort((a, b) => a - b);
	console.log(sortedArr);
	for (var i = 0; i < sortedArr.legnth) {
		if (sortedArr[i] !== i) {
			return i;
		}
	}
	return i;
};

