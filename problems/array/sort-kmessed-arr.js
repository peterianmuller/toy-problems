sortKMessedArr = (arr, k) => {
	let range = k + 1;
	for (let i = 0; i < arr.length - range; i++) {
		let chunk = arr.slice(0, i + range);
	}
};

insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let hole = i;
	}
	return arr;
};

module.exports = sortKMessedArr;
