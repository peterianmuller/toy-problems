// write a function that detects if a string is a palindrome. If 'Taco cat' is a palindrome, then we can remove spaces

module.exports = (string) => {

  //remove all spaces

  string = string.split('').filter((item)=>{
    if (item !== ' ') {
      return item;
    }
  }).join('');

  // iterate from beginning and end of string

  for (var i = 0; i < string.length/2; i++) {
    var left = string.charAt(i);
    var right = string.charAt(string.length - 1 - i);

  // if any item different return false
    if (left !== right) {
      return false;
    }

  } 

  // else return true
  return true;

}