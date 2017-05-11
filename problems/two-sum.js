const twoSum = function(nums){
  for (var i = 0; i < nums.length; i++) {
    let current = nums[i];
      for (var j = i + 1; j < nums.length; j++) {
        let next = nums[j];
        if (current + next === target) {
          return [current, next];
        }
      }
  }
  return null;
}

module.exports = twoSum;