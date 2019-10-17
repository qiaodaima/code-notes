// 解题思路：
// 1. 直接两两配对 看是否满足条件


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const length = nums.length;
  let isFind = false;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      isFind = nums[i] + nums[j] === target ? true : false;

      if (isFind) {
        return [i, j];
      }
    }
  }
};
