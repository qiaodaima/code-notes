// 解题思路：
//   1. 若一个数字只出现一次，则 它 和它相邻的元素一定不相等
//   2. 这里涉及到边界，就是第一个元素 和 最后一个元素 只有一边，因此要优先考虑这两个地方

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort();

  if (nums[0] !== nums[1]) {
    return nums[0];
  } else if (nums[nums.length - 1] !== nums[nums.length - 2]) {
    return nums[nums.length - 1];
  }

  for (let i = 1; i < nums.length - 1; i++) {
    if ((nums[i - 1] !== nums[i]) && nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};
