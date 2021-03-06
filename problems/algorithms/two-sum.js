twoSumQuadratic = (nums, target) => {
  for (var i = 0; i < nums.length; i++) {
    let current = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      let next = nums[j];
      if (current + next === target) {
        return [i, j];
      }
    }
  }
  return null;
};

twoSumLinear = (nums, target) => {
  // build up an object to keep track of {index, difference}
  let storage = {};
  for (var i = 0; i < nums.length; i++) {
    let current = nums[i];
    let diff = target - current;

    //save the property name as the diff!
    storage[diff] = i;
    if (storage.hasOwnProperty(nums[i])) {
      return [storage[nums[i]], i];
    }
  }
  return storage;
};

module.exports = { twoSumQuadratic: twoSumQuadratic, twoSumLinear: twoSumLinear };
