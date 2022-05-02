const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = ``;
  let i = email.length - 1;
  while (i !== -1 && email[i] !== `@`) {
    i--;
  }
  res = email.slice(i + 1);
  return res;
}

module.exports = {
  getEmailDomain
};
