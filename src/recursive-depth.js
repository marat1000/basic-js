const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  max = 0;
  calculateDepth(arr, n = 0) {
    if (n === 0) {
      this.max = 0;
    }
    if (!Array.isArray(arr)) {
      this.max = Math.max(this.max, n);
    } else if (arr.length === 0) {
      this.max = Math.max(this.max, n + 1);
    } else {
      for (let el of arr) {
        this.calculateDepth(el, n + 1)
      }
    }
    return this.max;
  }
}

module.exports = {
  DepthCalculator
};
