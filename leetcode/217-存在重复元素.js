// 解题思路：
//   1. 先对数组进行排序
//   2. 如果不存在重复的，则每个相邻元素都不相等
//   3. 如果相邻元素存在相等，则说明存在重复元素
//   4. 因为是每一个元素问后一个元素是否相等，因此最后一个元素就不用问了

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};
