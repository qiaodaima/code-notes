function quickSort(arr) {
  // 数组是引用传递 避免修改原数组
  arr = JSON.parse(JSON.stringify(arr));

  // 数组只有一个元素
  if(arr.length < 2) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length / 2);
  let middle = arr.splice(middleIndex, 1)[0];
  let left = [];
  let right = [];

  // 和中间元素比较，小的放左边， 大的放右边
  for(let i = 0; i < arr.length; i++) {
    arr[i] < middle ? left.push(arr[i]) : right.push(arr[i]);
  }

  // 递归
  return quickSort(left).concat(middle, quickSort(right));
}

let arr = [85, 24, 63, 45, 17, 31, 96, 50];

quickSort(arr);
console.log(quickSort(arr));
console.log(arr);
