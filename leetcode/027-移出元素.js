// 解题思路：
//  1. 遍历该数组成员，判断是否和val相等的元素
//  2. 如果遇到成员和val相等，则从该位置的下一个位置开始一个新的遍历，用来计算重复元素的个数
//  3. 遍历的依据是如果不能等则结束遍历，否则计数器+1
//  4. 最后将数组往前移动
//  5. 为了避免无意义的操作，数组的实际长度 应该是【nums.length - repeat】即，原数组的长度减去 重复元素的个数
//  6. 因此每一轮循环，都应该及时更新数组的及时长度


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let repeat = 0; // 统计val出现的次数
  let length = nums.length;
  let endIndex = length - repeat;

  for (let i = 0; i < endIndex; i++) {
    if (nums[i] !== val) {
      continue;
    }

    let count = 1; // 存储重复个数

    // 计算连续重复个数
    for (let j = i + 1; j < endIndex; j++) {
      if (nums[j] !== nums[i]) {
        break;
      }

      count++;
    }

    // 移动数组元素 要避免数组越界，因此此处要减去count
    for (let j = i; j < endIndex - count; j++) {
      nums[j] = nums[j + count];
    }

    repeat += count;
    endIndex = length - repeat; // 移动完数组后，要更新数组的实际长度
  }

  return length - repeat;
};
