var rotate = function (nums, k) {
  let arr = [];

  if (k > 0) {
    const slicedArr = nums.slice(0, nums.length - k);

    const endOfTheArr = nums.slice(nums.length - k, nums.length);

    arr = endOfTheArr.concat(slicedArr);

    return arr;
  }

  return;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);

var rotateBetter = function (nums, k) {
  k = k % nums.length; // Normalize k to avoid unnecessary full rotations

  if (k === 0) return nums; // If no rotation is needed, return the array as is

  // Slice the array and create the rotated version
  const slicedArr = nums.slice(0, nums.length - k);
  const endOfTheArr = nums.slice(nums.length - k);
  const arr = endOfTheArr.concat(slicedArr);

  // Copy the new array back to nums to modify it in-place
  for (let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
};
