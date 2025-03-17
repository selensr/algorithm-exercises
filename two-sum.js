function twoSum(nums, target) {
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numMap.has(complement)) {
      console.log("ex", [numMap.get(complement), i]);
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
