const { NotImplementedError } = require("../extensions/index.js");

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
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  // initialize result matrix with 0s
  for (let i = 0; i < rows; i++) {
    result.push(Array(cols).fill(0));
  }

  // loop through matrix and count mines in neighboring cells
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        // if cell contains a mine
        // increment counts for neighboring cells
        for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
          for (let colOffset = -1; colOffset <= 1; colOffset++) {
            const row = i + rowOffset;
            const col = j + colOffset;
            if (
              row >= 0 &&
              row < rows &&
              col >= 0 &&
              col < cols &&
              !(rowOffset === 0 && colOffset === 0)
            ) {
              result[row][col]++;
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
