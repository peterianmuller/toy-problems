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

  input.split('').forEach((item,index)=>{
    if (storage[item]) {
      stack.push(storage[item]);
    }
    if(item === ')' || item === ']' || item === '}') {
      let first = stack.pop();
      if (item !== first) {
        return false;
      }
    }
  });

  if (stack.length > 0) {
    return false;
  }

  return true;
};

module.exports = balancedBrackets;
console.log(balancedBrackets('hello world'))
