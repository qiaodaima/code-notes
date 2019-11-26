// 解题思路：
//   1. 遍历数组，将单词提取出来，
//   2. 定义两个变量 wordArr、word 一个用来存放单词，一个从来存放所有的单词
//   3. 遍历数组时，如果遇到是空格，则把单词放入单词数组（这一步可以将单词进行反转），并且把单词重置为空
//   4. 如果不是空格，则字符串拼接提起单词
//   5. 因为字符串末尾可能有空格，也可能没有空格，假如字符串末尾没有空格，则会丢掉一个单词（因为接下来都不满足条件3）
//   6. 因此最后要判断下 单词是不是为空，不为空的话则推入单词数组
//   7. 最后将数组转换成字符串即可   注意：题目已经声明 单词间只会有一个空格，不存在多个

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const length = s.length;
  let wordArr = [];
  let word = '';

  for (let i = 0; i < length; i++) {
    if (s[i] === ' ') {
      word = word.split('').reverse().join('');
      word ? wordArr.push(word) : null;
      word = '';
      continue;
    }

    word += s[i];
  }

  word ? wordArr.push(word.split('').reverse().join('')) : null;

  return wordArr.join(' ');
};
