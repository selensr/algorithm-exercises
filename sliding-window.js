function maxSumSubarray(arr, k) {
  let maxSum = 0; //8 //8 //8 //8
  let currentSum = 0; //5 //2 //1 //7
  let left = 0; //1 //2 //3 //4

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right]; //second loop 3
    //third loop 7
    //fourth loop 3
    //fifth loop 8

    if (right - left + 1 === k) {
      //false //true //true //true
      maxSum = Math.max(maxSum, currentSum); //8 //8 //8 //8
      //sliding the window - remove the element going  out of the window
      currentSum -= arr[left]; //5 //2 //1 //7
      left++; //1 //2 //3 //4
    }
  }

  return maxSum;
}

//[3,5,2,1,7], k=2

function findAnagrams(s, p) {
  const result = [];
  const pCount = new Array(26).fill(0); // [0,0,0,0,0,0...]
  const sCount = new Array(26).fill(0); // [0,0,0,0,0,0...]
  const aCharCode = "a".charCodeAt(0);

  for (let char of p) {
    pCount[char.charCodeAt(0) - aCharCode]++; //[1,1,1,0,0,0,...] - abc = p
  }

  let left = 0;

  //'cbaebabacd'
  for (let right = 0; right < s.length; right++) {
    sCount[s.charCodeAt(right) - aCharCode]++; //[1,1,1,0,0,1,0,0] //first iteration [0,0,1,0,0,...]
    //third iteration it will be true // [1,1,1,0,0,0,0...] -'cba...' = s
    if (right >= p.length - 1) {
      //true
      //what do we gonna do
      //the number of elements in the s word has reached the window size which is the length of p
      //now we can start sliding window on the s word
      //for the third iteration the both frequency arrays are equal
      //so we should take the starting index from the s word and keep it in the result array
      if (pCount.every((val, index) => val === sCount[index])) {
        result.push(left);
      }

      sCount[s.charCodeAt(left) - aCharCode]--; //[1,1,0,0,1,0...] removed c added e
      //[1,2,0,0,0,...] removed e added b...
      left++;
    }
  }

  return result;
}

//s = "cbaebabacd", p = 'abc'
