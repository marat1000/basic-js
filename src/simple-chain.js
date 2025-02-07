const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = ``) {
    if ( value === `` ) {
      this.chain.push(`()`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    position = +position - 1;
    if (Object.is(position, NaN) || position > this.chain.length - 1 || position < 0 || position % 1 !== 0) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join(`~~`);
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
