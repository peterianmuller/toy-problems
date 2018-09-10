isogram = str => {
  // convert string to lowercase
  str = str.toLowerCase();
  // create new Set
  var chars = new Set();
  // iterate over string
  for (var i = 0; i < str.length; i++) {
    // for each character in string check if set has a key at that value
    if (chars.has(str[i])) {
      // if true return false
      return false;
    }
    // if false set new prop on Set
    chars.add(str[i]);
  }
  // return true
  return true;
};

module.exports = isogram;
