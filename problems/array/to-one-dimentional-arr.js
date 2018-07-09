const toLinearArr = matrix => {
	// keep track of topRow, bottomRow, leftCol, and rightCol. Note that we need to do length - 1, because this is an inbounds index
	let topRow = 0,
		bottomRow = matrix.length - 1,
		leftCol = 0,
		rightCol = matrix[0].length - 1,
		copy = [];

	while (topRow <= bottomRow) {
		// select top row of array
		for (let i = leftCol; i <= rightCol; i++) {
			copy.push(matrix[topRow][i]);
		}
		topRow++;
		// select rightcol
		for (let i = topRow; i <= bottomRow; i++) {
			copy.push(matrix[i][rightCol]);
		}
		rightCol--;
		// select bottom row
		if (topRow <= bottomRow) {
			for (let i = rightCol; i >= leftCol; i--) {
				copy.push(matrix[bottomRow][i]);
			}
			bottomRow--;
		}
		// select left col from bottom to top
		if (leftCol <= rightCol) {
			for (let i = bottomRow; i >= topRow; i--) {
				copy.push(matrix[i][leftCol]);
			}
			leftCol++;
		}
	}

	return copy;
};

module.exports = toLinearArr;
