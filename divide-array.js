function divideArray(nums) {
  const elementMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (elementMap.has(num)) {
      elementMap.set(num, elementMap.get(num) + 1);
    } else {
      elementMap.set(num, 1);
    }
  }

  for (let value of elementMap.values()) {
    if (value % 2 !== 0) {
      return false; // If any count is odd, return false
    }
  }

  return true;
}

const array = [1, 2, 3, 4, 5, 1]; // Should return true because '1' is duplicated
console.log(divideArray(array));
