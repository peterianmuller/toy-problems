// I arr1 arr2
// O ture or false based on if each element in arr1 exists in arr2 and is squared

// if length of arr1 is diff than arr2 return false
// declare freqCounter1 set to {}
// declare freqCounter2 set to {}
// iterate over arr1
// for each element add prop to freqCounter1 with element: number of times seen element
// iterare over arr2
// for each element add prop to freqCounter2 with element: number of times seen element
// iterate over freqCounter1
// for each key
// if prop exists in freqCounter2 at key * key
// if val is different return false
// if prop doesn't in freqCounter2 at key * key return false
// return true

// same([1,2], [4,1])

same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let freqCounter1 = {};
	let freqCounter2 = {};
	arr1.forEach(num => {
		freqCounter1[num] = ++freqCounter1[num] || 1;
	});
	arr2.forEach(num => {
		freqCounter2[num] = ++freqCounter2[num] || 1;
	});
	for (var key in freqCounter1) {
		if (!freqCounter2.hasOwnProperty(key * key)) return false;
		else if (freqCounter2[key * key] !== freqCounter1[key]) {
			return false;
		}
	}
	return true;
};

var before = Date.now();
same(new Array(10000).fill(1), new Array(10000).fill(2));
var after = Date.now();
console.log(after - before);
