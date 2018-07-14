// https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso

isIPv4 = str => {
	let arr = str.split('.');

	mixedNumsAndChars = str => {
		for (let i = 0; i < str.length; i++) {
			if (isNaN(str.charAt(i))) {
				return true;
			}
		}
		return false;
	};
	notBetween0And255 = num => {
		return num < 0 || num > 255;
	};

	for (let i = 0; i < arr.length; i++) {
		if (mixedNumsAndChars(arr[i]) || notBetween0And255(parseInt(arr[i]))) {
			return false;
		}
	}

	return true;
};

module.exports = isIPv4;
