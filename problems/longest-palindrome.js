'use strict'

// reverseString 

const reverseString = str => {
  if (typeof str !== 'string') {
  	return null;
  }	
  return str.split('').reverse().join('');
}

// isPalindrome 

const isPalindrome = str => {

};


module.exports = {reverseString : reverseString, isPalindrome: isPalindrome}