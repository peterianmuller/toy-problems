matrixElementSum = matrix => {
	let totalPrice = 0;
	// iterate over entirety of array
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			// if we find a 0
			if (matrix[i][j] === 0) {
				let row = i;
				while (matrix[row] !== undefined) {
					matrix[row][j] = 0;
					row++;
				}
			}
		}
	}
	matrix.forEach(row => {
		row.forEach(el => {
			totalPrice += el;
		});
	});
	return totalPrice;
};

module.exports = matrixElementSum;
