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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const result = {};
  for (let i = 0; i < domains.length; i++){
  let single = domains[i];
  let splitArr = single.split('.');
  let domain = '';
  for (let j = splitArr.length -1; j >= 0; j--){
    domain += '.' + splitArr[j];
    if (!result[domain]){
      result[domain] = 1;
    }else{
      result[domain]++;
    }
  }
}
  return result;
}

module.exports = {
  getDNSStats
};
