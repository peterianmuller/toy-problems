

bubbleSort = array => {
  if (!Array.isArray(array)) {
    return null;
  }
  //start at first element
  for (var i = 0; i < array.length; i++) {
    console.log('i is: ', i);
    var current = array[i];
    var next = array[i + 1];
    //compare to second element
    if (current > next) {
      //is second element larger than first swap current and next. Move larger element to the right and decrement i by one so that we continue to iterate from the same place
      array[i] = next;
      array[i+1] = current;

      // need to set i to -1 because we increment it by 1
      i = -1;
    }
  }
  return array;
};

//console.log(bubbleSort([4,2,5,6,-1,99]));

module.exports = bubbleSort
