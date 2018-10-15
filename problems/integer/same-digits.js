const sameDigits = (int1, int2) => {
	let int1Map = {};
	let int1Str = int1.toString();
	let int2Str = int2.toString();
	for (let char of int1Str) {
		int1Map[char] = ++int1Map[char] || 1;
	}
	for (let char of int2Str) {
		if (!int1Map[char]) {
			return false;
		} else {
			int1Map[char]--;
		}
	}
	return true;
};

module.exports = sameDigits;
