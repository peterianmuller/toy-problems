

bubbleSort = array => {
  //start at first element
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    var next = array[i + 1];
    //compare to second element
    if (current > next) {
      //is second element larger than firstswap
      array[i] = next;
      array[i+1] = current;
      i = -1;
    }
  }
  return array;
};

module.exports = bubbleSort