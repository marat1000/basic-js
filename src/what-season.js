const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  `use strict`;
  let res = ``;
  if (arguments.length === 0) {
    res = `Unable to determine the time of year!`;
  } else if (date instanceof Date && Object.prototype.toString.call(date) === `[object Date]` && !Object.prototype.hasOwnProperty.call(date, `toString`) ) {
    if (date.getMonth() < 2 || date.getMonth() > 10) {
      res = `winter`;
    } else if (date.getMonth() < 5) {
      res = `spring`;
    } else if (date.getMonth() < 8) {
      res = `summer`;
    } else {
      res = `autumn`;
    }
  } else {
    throw new Error(`Invalid date!`);
  }
  return res;
}

module.exports = {
  getSeason
};
