//inputs 

var wordPattern = function(word, pattern){
  // make storage object
  var storage = {};
  var words = word.split(' ');

  //check if there is a word for every piece of pattern
  if (words.length !== pattern.length) {
    return false;
  }
 
}


wordPattern("dog cat cat fish", "abba");
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.

module.exports = wordPattern;