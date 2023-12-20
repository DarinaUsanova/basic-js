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
function getCommonCharacterCount( s1, s2) {
  let char = 0;
  let searchStr = s2.split('');

  for (let i = 0; i < s1.length; i +=1) {
    let indexChar = searchStr.indexOf(s1[i]);

    if (indexChar !== -1) {
      char += 1;
      searchStr.splice(indexChar, 1);
    }
  }
  return char;
}

module.exports = {
  getCommonCharacterCount
};
