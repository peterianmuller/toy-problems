wordPattern = (word, pattern) => {
  // make storage object
  var storage = {};
  var words = word.split(' ');

  //check if there is a word for every piece of pattern
  if (words.length !== pattern.length) {
    return false;
  }

  //iterate over the pattern
  for (var i = 0; i < pattern.length; i++) {
    // if no property for pattern item
    if (!storage[pattern[i]]) {
      //add key for pattern item and have it point to word at same index i.
      storage[pattern[i]] = words[i];
    } else if (storage[pattern[i]] !== words[i]) {
      //if pattern item at index doesn't point to word
      return false;
    }

    // checking if different letters in pattern but same word in obj
    if (pattern[i] !== pattern[i - 1]) {
      if (storage[pattern[i]] === storage[pattern[i - 1]]) {
        return false;
      }
    }
  }

  return true;
};

// main idea - iterate through the pattern at the same time of the words
// add prop to storage object storage[pattern[i]] = string[i]
// this way we compare not only that storage[pattern[i]] exists, but that the order remains.

module.exports = wordPattern;
