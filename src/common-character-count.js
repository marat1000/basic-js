const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let s2Arr = Array.from(s2);
  for (let l of s1) {
    let idx = s2Arr.indexOf(l);
    if (idx > -1 && idx < s2Arr.length) {
      res++;
      s2Arr.splice(idx, 1);
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
