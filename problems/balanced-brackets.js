'use strict'

const balancedBrackets = input => {

  // if input length is 1 or 0 reutrn false
  if (!input || input.length === 0 || input.length === 1) {
    return false;
  }

  // create storage object with opposite pairs
  let storage = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }

  let stack = [];
  // iterate over string and when find opening bracket push to stack
  for (let i = 0; i < input.length; i++) {
    let current = input.charAt(i);
    if (storage[current]) {
      stack.push(storage[current]);
    }
    if (current === ')' || current === ']' || current === '}') {
      let first = stack.pop();
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
