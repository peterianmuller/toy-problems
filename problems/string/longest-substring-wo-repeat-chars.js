'use strict'

const longestSubstringWithoutRepeatedCharacters = s => {
	var maxLength = 1;
	
	if (typeof s !== 'string') {
		return null;
	} else if (s.length === 0) {
		return 0;
	} else if (s.length === 1) {
		return 1;
	}

	for (var i = 0; i < s.length; i++) {
		var length = 1;
		for(var j = i + 1; j <= s.length; j++) {
			var myString = s.slice(i,j);
			if (myString.indexOf(s.charAt(j)) === -1) {
			  length++;	
			} else {
				break;
			}
		}
	maxLength = maxLength < length ? length : maxLength;
	}
	return maxLength;

}


module.exports = longestSubstringWithoutRepeatedCharacters;