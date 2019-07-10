// I -> varied number of arguments
// O -> true if there are any duplicates in args list, false otherwise

// declare freq set to new Set
// iterate over args
// for each arg
// if freq has a property at arg return true
// otherwise add arg to set
// return false

module.exports = (...arguments) => {
	let freq = new Set();
	for (let arg of arguments) {
		if (freq.has(arg)) return true;
		else freq.add(arg);
	}
	return false;
};
