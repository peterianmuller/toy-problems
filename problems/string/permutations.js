// I -> string
// O -> array of all permutations of string

const permutations = function(str) {
	var allPerms = [];

	(function permutation(str, prefix) {
		if (str.length === 0) {
			allPerms.push(prefix);
		} else {
			for (var i = 0; i < str.length; i++) {
				let rem = str.substring(0, i) + str.substring(i + 1);
				permutation(rem, prefix + str.charAt(i));
			}
		}
	})(str, '');

	return allPerms;
};

module.exports = permutations;
