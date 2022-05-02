const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = -Infinity;
  let str = String(n);
  let idx = 0;
  for (let digit of str) {
    let strt = str.slice(0, idx) + str.slice(idx + 1);
    if (+strt > res) {
      res = +strt;
    }
    idx++;
  }
  return res;
}

module.exports = {
  deleteDigit
};
