const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];

  function nextCells(arr, i, j) {
    let sum = 0;
    let prevRow = arr[i - 1];
    let currentRow = arr[i];
    let nextRow = arr[i + 1];
    [prevRow, currentRow, nextRow].forEach((row, idx) => {
      if (row) {
        if (idx !== 1) {
          if (row[j - 1] === true) sum++;
          if (row[j] === true) sum++;
          if (row[j + 1] === true) sum++;
        } else {
          if (row[j - 1] === true) sum++;
          if (row[j + 1] === true) sum++;
        }
      }
    })
    return sum;
  }

  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      res[i][j] = nextCells(matrix, i, j);
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
