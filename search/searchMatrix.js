// Matrix Search Problem
// Problem Statement:
// Given a 2D matrix in which each row and each column are sorted in ascending order, write a function to determine whether a given target value exists in the matrix.
// Features of the Matrix:
// 	•	Each row is sorted in ascending order.
// 	•	Each column is sorted in ascending order.

function searchMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (target === matrix[i][k]) {
        return true;
      }
    }
  }

  return false;
}

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
let target = 5;

// Output: true

console.log(searchMatrix(matrix, target));
