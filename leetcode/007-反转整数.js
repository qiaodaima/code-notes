// 解题思路：
//   1. 首先要标识 该数字是否为正数
//   2. 然后再对正数 通过 % 可以取到这个数的最后一个数字a， 然后将其存入一个变量A， 例如  123 % 10 可以取到 3
//   3. A每次要*10(为的是在末尾空出一个位置，放这个数字a)，然后在加上这个数字a,
//   4. 然后再对该正数 除以 10 可以将最后一个数舍去，例如  123 / 10 可以取到 12,这样3就被丢掉了 (js记得对商取整)
//   5  反复的执行 【2】、【3】，直至正数为 0。
//   6. 最后把符号放上去就行，
//   7. 题目有交代，如果这个值不在范围内[−2，31,  2，31 − 1]，则输出0，(js的整数范围比题目的范围大，所以结果不会在js里面溢出)


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x ? true : false;
  let reverseNumber = 0;

  x = isNegative ? x : -x;

  while (x) {
    reverseNumber = reverseNumber * 10 + x % 10;
    x = Number.parseInt(x / 10);
  }

  reverseNumber = isNegative ? reverseNumber : -reverseNumber;

  return Math.pow(-2, 31) <= reverseNumber && reverseNumber <= (Math.pow(2, 31) - 1) ? reverseNumber : 0;
};
