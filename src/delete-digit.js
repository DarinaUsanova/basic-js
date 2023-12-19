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
  let s = n.toString();
  let str = s.split('');
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let cut = str.slice(0, i).concat(str.slice(i + 1));
    let num = +cut.join('');
    if (num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
