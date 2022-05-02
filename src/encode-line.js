const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = ``;
  let i = 0;
  while (i !== str.length) {
    let j = i + 1;
    while (j !== str.length && str[j] === str[i]) {
      j++;
    }
    if (j === i + 1) {
      res = res + str[i];
    } else {
      res = res + `${j - i}${str[i]}`
    }
    i = j;
  }
  return res;
}

module.exports = {
  encodeLine
};
