// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let value = 1;
  let maxValue = n * n;
  let columnStart = 0;
  let columnEnd = n - 1;
  let rowStart = 0;
  let rowEnd = n - 1;


  while (value <= maxValue) {
    // go East
    for (let i = columnStart; i <= columnEnd; i++) {
      result[rowStart][i] = value;
      value++;
    }
    rowStart++;
    
    // go South 
    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][columnEnd] = value;
      value++;
    }
    columnEnd--;

    // // go West
    for (let i = columnEnd; i >= columnStart; i--) {
      result[rowEnd][i] = value;
      value++;
    }
    rowEnd--;

    // // go North
    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][columnStart] = value;
      value++;
    }
    columnStart++;
  }

  return result;
}

module.exports = matrix;
