sortKMessedArr = (arr, k) => {
	let range = k + 1;
	for (let i = 0; i < arr.length - 1; i++) {
		let chunk = arr.slice(0, i + range);
		insertionSort(chunk);
		if (chunk.length === arr.length) {
			return chunk;
		}
	}
};

insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let hole = i;
		while (hole > 0 && current < arr[hole - 1]) {
			arr[hole] = arr[hole - 1];
			hole--;
		}
		arr[hole] = current;
	}
	return arr;
};

module.exports = sortKMessedArr;

