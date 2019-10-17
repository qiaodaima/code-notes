// 解题思路：
//   1. 负数肯定不是回文数
//   2. 在正数的前提下，判断收尾是否对称即可，即，第一个和最后一个比，第二个和倒数第二个比，以此类推
//   3. 只要比到中间就行

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if ( x < 0) {
    return false;
  }

  const xString = x + '';
  const xStringLength = xString.length;

  for (let i = 0; i < xStringLength / 2; i++ ) {
    if (xString[i] !== xString[xStringLength - 1 - i]) {
      return false;
    }
  }

  return true;
};
