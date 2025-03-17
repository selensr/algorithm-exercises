function search(matrix, target) {
  const flattenArr = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let e = 0; e < matrix[i].length; e++) {
      if (target === matrix[i][e]) {
        return true;
      } else {
        flattenArr.push(matrix[i][e]);
      }
    }
  }

  return flattenArr.includes(target);
}

search(
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  20
);

function fastestSearch(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row < matrix.length) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--; // move left
    } else {
      row++; //move down
      //because it's ascending left to right and top to bottom
    }
  }

  return false;
}
