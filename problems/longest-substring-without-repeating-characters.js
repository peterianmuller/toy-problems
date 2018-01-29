const longestSubstringWithoutRepeatedCharacters = s => {
	
	if (!s || typeof s !== 'string') {
		return null;
	} else if (s.length === 1) {
		return 1;
	}

}


module.exports = longestSubstringWithoutRepeatedCharacters;