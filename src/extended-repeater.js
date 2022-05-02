const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  `use strict`;
  if (!options.hasOwnProperty(`separator`)) {
    options.separator = `+`;
  }
  if (!options.hasOwnProperty(`additionSeparator`)) {
    options.additionSeparator = `|`;
  }
  if (!options.hasOwnProperty(`repeatTimes`)) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty(`additionRepeatTimes`)) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty(`addition`)) {
    options.addition = ``;
  }
  let strRes = String(str);
  let adRes = String(options.addition)
  let res = [];
  let resAdd = [];
  let i = 0;
  while (i !== options.additionRepeatTimes) {
    resAdd.push(adRes);
    i++;
  }
  strRes = strRes + resAdd.join(options.additionSeparator);
  i = 0;
  while (i !== options.repeatTimes) {
    res.push(strRes);
    i++;
  }
  res = res.join(options.separator);
  return res;
}

module.exports = {
  repeater
};
