const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  `use strict`;
  let res = '';
  if ( !Array.isArray(members) ) {
    res = false;
  } else {
    for (let el of members) {
      if ( typeof el === `string` ) {
        let i = 0;
        while ( i !== el.length && el[i] === ` ` ) {
          i++;
        }
        if ( i !== el.length ) {
          res = res + el[i].toUpperCase();
        }
      }
    }
    res = res.split('').sort().join('');
  }
  return res;
}

module.exports = {
  createDreamTeam
};
