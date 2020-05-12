// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
  Input:
  [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ]   
  Output: 2
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

function diagonalDifference(matrix) {
    let ltrSum = 0,
      rtlSum = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      ltrSum += row[i];
      rtlSum += row[row.length - i - 1];
    }
    return Math.abs(ltrSum - rtlSum);
  }
  
  function diagonalDifference2(matrix) {
    let diff = 0;
  
    matrix.forEach((row, i) => (diff += row[i] - row[row.length - i - 1]));
    return Math.abs(diff);
  }