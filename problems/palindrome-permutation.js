// Define a function that takes in a string and returns a Boolean if that string is a permutation of a palindrome

palindromePermutation = str => {
  // create storage object
  var storage = {};

  // iterate over string
  for (var i = 0; i < str.length; i++) {
    var character = str.charAt(i);

  // create property in storage object with char set to true for all found letters
    if (!storage[character]) {
      storage[character] = true;
    } else {
    // if letter found again delete property
      delete storage[character];
    }
  };


  // check if any props left
  if (Object.keys(storage).length > 0) {
    // if so return false
    return false;
  }

  return true;
};

module.exports = palindromePermutation;