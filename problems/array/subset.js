// [1,2,3,4], [2,3]
// iterate over mainArr and see if

isSubset = (mainArr, subArr, mainArrCopy, subArrCopy) => {
  if (!mainArr || !subArr) {
    return false;
  }
  if (mainArr.length < subArr.length) {
    return null;
  }

  var mainArrCopy = mainArrCopy || mainArr.slice();
  var subArrCopy = subArrCopy || subArr.slice();

  if (subArrCopy.length === 0) {
    return true;
  }

  var item = subArrCopy.pop();
  var index = mainArrCopy.indexOf(item);

  if (index > -1) {
    mainArrCopy.splice(index, 1);
    return isSubset(mainArr, subArr, mainArrCopy, subArrCopy);
  } else {
    return false;
  }
};

module.exports = isSubset;
