//Input: [100, 4, 200, 1, 3, 2)
//Output: 4
//Explanation: The longest consecutive subsequence is [1, 2, 3, 4].
//Input: [5, 7, 10, 2, 3, 6]
//Output: 3
//Explanation: The longest consecutive subsequence is [5, 6, 7].

function findLongestConsecutiveSubsequence(nums) {
  //length control
  if (nums.length === 0) return 0;

  //remove dublicates
  nums = [...new Set(nums)];

  //sort numbers
  nums.sort((a, b) => a - b);

  let currentStreak = 0;
  let longestStreak = 0;

  for (let i = 1; i < nums.length; i++) {
    //0
    //check if the next number is consequtive
    if (nums[i] === nums[i - 1] + 1) {
      currentStreak++;
    } else {
      longestStreak = Math.max(longestStreak, currentStreak);
      currentStreak = 1;
    }
  }

  return Math.max(longestStreak, currentStreak);
}

console.log(findLongestConsecutiveSubsequence([5, 7, 10, 2, 3, 6]));

function findLongestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);

  let longestStreak = 0;

  for (let num of nums) {
    // Check if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Increment the streak while consecutive numbers are found
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      // Update the longest streak found
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

// Example usage:
console.log(findLongestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(findLongestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9

//fibonacci

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//palindrome

function isPalindrome(s) {
  const normalizedStr = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversedStr = normalizedStr.split("").reverse().join("");
  return normalizedStr === reversedStr;
}
