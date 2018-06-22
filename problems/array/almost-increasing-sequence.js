// This is a codeFights problem that can be found here:

// https://codefights.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

// Also shout out to Dylan Isreal over at CodingTutorials360 for the tips.

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function almostIncreasingSequence(sequence) {
	let removedItems = 0;
	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] >= sequence[i + 1]) {
			removedItems++;
			// issue is if we remove an item but then the next item messes up the array in such a way that we would have to remove another element
			if (sequence[i + 1] <= sequence[i - 1] && sequence[i + 2] <= sequence[i]) {
				return false;
			}
		}
	}
	return removedItems <= 1;
}

// [1,3,1,3]

module.exports = almostIncreasingSequence;
