//inputs 

var wordPattern = function(word, pattern){
  // make storage object
  var storage = {};
  var words = word.split(' ');

  //check if there is a word for every piece of pattern
  if (words.length !== pattern.length) {
    return false;
  }

  //iterate over the pattern
  for (var i = 0; i < pattern.length; i++) {
    if (!storage[pattern[i]]) {
      storage[pattern[i]] = words[i];
    } else if (storage[pattern[i]] !== words[i]) {
      return false;
    }
  }
  return true;
 
}


// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.

module.exports = wordPattern;