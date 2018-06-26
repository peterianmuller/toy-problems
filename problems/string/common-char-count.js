// https://codefights.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

const commonCharCount = (s1, s2) => {
	let s2Arr = s2.split('');
	let commonCharCount = {};
	let total = 0;
	for (let i = 0; i < s1.length; i++) {
		if (s2Arr.indexOf(s1.charAt(i)) > -1) {
			if (commonCharCount.hasOwnProperty(s1.charAt(i))) {
				commonCharCount[s1.charAt(i)]++;
			} else {
				commonCharCount[s1.charAt(i)] = 1;
			}
			s2Arr.splice(s2.indexOf(s1.charAt(i), 1));
		}
	}
	for (let key in commonCharCount) {
		total += commonCharCount[key];
	}
	return total;
};

module.exports = commonCharCount;
