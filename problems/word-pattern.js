//inputs 

var wordPattern = function(word, pattern){
  // make storage object
  var storage = {};
  
  // set props of storage object as keys from each char in word to false
  for (var i = 0; i < pattern.length; i++) {
    var character = pattern.charAt(i);
    if (storage[character] !== false) {
      storage[character] = false;
    }
    console.log(storage);
  }

  // split word into array
  var strArray = word.split(' ');

  // iterate over array
  for (var i = 0; i < strArray.length; i++) {
    // set value in storage object from false to word
  }

  // use map to create new array with words replaced by keys

  // join array to make a string

  // compare strings and return result
}


// pattern = "abba", str = "dog cat cat dog" should return true.
  // {a: 'dog',
  //  b: 'cat '}

  // split array on space

  //

wordPattern("dog cat cat fish", "abba");
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.