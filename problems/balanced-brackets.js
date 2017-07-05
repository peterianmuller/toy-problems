'use strict'

var balancedBrackets = function(input) {

  // if input length is 1 or 0 reutrn false
  if (!input || input.length === 0 || input.length === 1) {
    return false;
  }

  // create storage object with opposite pairs
  var storage = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }


  var stack = [];
  // iterate over string and when find opening bracket push to stack
  for (var i = 0; i < input.length; i++) {
    var current = input.charAt(i);
    if (storage[current]) {
      stack.push(storage[current]);
    }
    if (current === ')' || current === ']' || current === '}') {
      var first = stack.pop();
      if (current !== first) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};

module.exports = balancedBrackets;
