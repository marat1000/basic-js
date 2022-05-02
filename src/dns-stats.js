const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let str = domains.join(``);
  let i = 0;
  while (i !== domains.length) {
    let arr = domains[i].split(`.`);
    let j = 0;
    while (j !== arr.length) {
      let arr1 = arr.slice(-j - 1);
      let arr2 = Array.from(arr1);
      arr2.reverse();
      arr2 = `.${arr2.join(`.`)}`;
      arr1 = arr1.join(`.`);
      res[arr2] = str.split(arr1).length - 1;
      j++;
    }
    i++;
  }
  return res;

}

module.exports = {
  getDNSStats
};
