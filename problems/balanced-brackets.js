var balancedParens = function(input) {

  // if input length is 1 or 0 reutrn false
  if (input.length === 0 || input.length === 1) {
    return false;
  }

  // create storage object with opposite pairs


  var stack = [];

  // iterate trough string and when find opening bracket push to stack
  for (var i = 0; i < input.length; i++) {
    var current = input.charAt(i);
    if (current === '(' || current === '[' || current === '{' ) {
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
