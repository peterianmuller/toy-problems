// I: arr of unique chars, a string str
// O: string shortest substring of str that contains all characters in arr

getShortestUniqueSubstring = (arr, str) => {
	let arrCopy = arr.slice();
	let allSubstrings = {};
	let currentSubstring = '';
	for (let i = 0; i < str.length; i++) {
		for (let j = i; j < str.length; j++) {
			if (arrCopy.indexOf(str[j]) > -1) {
				arrCopy.splice(arrCopy.indexOf(str[j]), 1);
			}
			currentSubstring += str[j];
			if (!arrCopy.length) {
				allSubstrings[currentSubstring] = true;
				currentSubstring = '';
				j = str.length - 1;
			}
		}
		return Object.keys(allSubstrings).length ? Object.keys(allSubstrings).sort((a, b) => a.length - b.length)[0] : '';
	}
};

// declare arrCopy set to a copy of the array
// declare allSubstrings set to an object
// declare currentSubstring set to ''
// iterate over str
// iterate from currenet chracter to end
// check if current character exists in arrCopy
// if true, remove that character using splice
// concatinate current character to currentSubstring
// check if arrCopy has a length
// if false
// add property to allSubStrings of substring with value of true
// reassign currentSubstring to ''
// reassign second iteration variable j to end of loop
// create array out of properties in allSubstrings, then sort array by length and return first element if array has a length
// if array doesn't have length return ''

module.exports = getShortestUniqueSubstring;
