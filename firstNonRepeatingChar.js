function firstNonRepeatingChar(str) {
  const repeatedChars = [];

  const arr = str.split("");

  for (let i = 0; i < str.length; i++) {
    const newArr = arr.slice(i + 1);

    if (newArr.includes(str[i])) {
      repeatedChars.push(str[i]);
    } else if (!newArr.includes(str[i]) && !repeatedChars.includes(str[i])) {
      return str[i];
    }
  }

  return null;
}

//console.log(firstNonRepeatingChar("stress")); // "t"
//console.log(firstNonRepeatingChar("aabbcc")); // null

function firstNonRepeatingChar2(str) {
  const charCount = {};

  // Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  console.log(charCount);

  // Find first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

//console.log(firstNonRepeatingChar2("stress")); // "t"
//console.log(firstNonRepeatingChar2("aabbcc")); // null

function flattenArray(arr) {
  let flattenArr = []; // Use let because we're reassigning

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArr = flattenArr.concat(flattenArray(arr[i])); // Simplified recursive call
    } else {
      flattenArr.push(arr[i]);
    }
  }

  return flattenArr;
}

console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
