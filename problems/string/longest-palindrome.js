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
  if (typeof str !== 'string') {
  	return null;
  }
  return str === reverseString(str);
};

//longestPalindrome

const longestPalindrome = str => {
  // decalre longestPalindrome variable
  let longestPalindrome = '';

  // iterate from l to r
  for (let i = 0; i < str.length; i++) {
  	//take one char away at a time from the left
  	for (var j = i; j < str.length; j++) {
    // create sub string at each step, check if palindrome and if substring is longer
      let substring = str.slice(i, str.length - i - j);
      //let substring = str.slice(j);
      if (isPalindrome(substring) && substring.length > longestPalindrome.length) {
      // if longer re-assign longestPalin to point to substring
      	longestPalindrome = substring;
      }
    }
  }

  // iterate from r to l, taking one char from r away at a time  
  for (let i = 0; i < str.length; i++) {
  	// iterate from r to l, taking one char from r away at a time  
    for (j = i; j < str.length; j++) {
  	  let substring = str.slice(-j);
  	  if (isPalindrome(substring) && substring.length > longestPalindrome.length) {
  	    longestPalindrome = substring;
  	  }
  	}
  }

  return longestPalindrome;

}





module.exports = {reverseString : reverseString, isPalindrome: isPalindrome, longestPalindrome: longestPalindrome}