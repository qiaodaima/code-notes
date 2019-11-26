/**
 * @param {number} x 查询位置的横坐标
 * @param {number} y 查询位置的纵坐标
 * @param {character[][]} board 网格
 * @param {string} word 要查询的单词
 * @param {number} depth 当前深度
 * @return {boolean}
 */
const search = (x, y, board, word, depth) => {
  let leftValue;
  let rightValue;
  let topValue;
  let bottomtValue;

  try {
    leftValue = board[x - 1][y];
    rightValue = board[x + 1][y];
    topValue = board[x][y - 1];
    bottomtValue = board[x][y + 1];
  } catch (error) {

  }

  const isFind = [leftValue, rightValue, topValue, bottomtValue].includes(word[depth - 1]);

  if (!isFind || depth > word.length) {
    return false;
  }

  if (isFind && (depth === word.length)) {
    return true;
  }

  search(x - 1, y, value, board, ++depth);
  search(x + 1, y, value, board, ++depth);
  search(x, y - 1, value, board, ++depth);
  search(x, y + 1, value, board, ++depth);
}


/**
 * @param {character[][]} board 网格
 * @param {string} word 要查询的单词
 * @return {boolean}
 */
const exist = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        search(i, j, board, word, 2);
      }
    }
  }

  return false;
};

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ];

exist(board, 'ABCCED');
