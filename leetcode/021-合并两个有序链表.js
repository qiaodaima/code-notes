// 解题思路：
//   1. 先生成一个头节点，作为合并后的单链表H，并且用一个指针P，永远指向该链表的尾部
//   2. 用两个指针 分别指向这两个要合并的链表的头部，然后开始遍历
//   3. 每次取两个链表中最小的那个节点 （和P指针指向的节点对比，对比的时候是比值）
//   4. 取了谁的节点，谁就向后偏移一下，并且P要及时修正，指向H链表的尾部
//   5. 假如有一个链表已经到底了，则结束循环，把没有结束的那个链表插入H链表的尾部
//   6. 最后返回【H.next】, 因为头节点是没有存东西的，是从 【H.next】开始存储的
//   7. 特别强调一点，js数组和对象是引用类型的，因此此方法是讲原来两个链表合并，并没生成新的节点，
//   8. 如果需要不破坏原链表，则每次都需要生成新节点即可


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const headNode = new ListNode(); // 头节点 即 主链表头部
  let mainPointer = headNode;      // 主链表指针 永远指向主链表的尾部

  while (l1 && l2) {
    // let minNode = l1.val < l2.val ? l1 : l2;

    // mainPointer.next = minNode;
    // mainPointer = mainPointer.next;
    // minNode = minNode.next;
    // 以上代码 和 下面 代码并不等价

    if (l1.val <= l2.val) {
      mainPointer.next = l1;
      mainPointer = mainPointer.next;
      l1 = l1.next;
    } else {
      mainPointer.next = l2;
      mainPointer = mainPointer.next;
      l2 = l2.next;
    }
  }

  mainPointer.next = l1 ? l1 : l2;

  return headNode.next;
};




// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// };


// 测试数据 1
// var l1 = new ListNode(1);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(4);

// var l2 = new ListNode(1);
// l2.next = new ListNode(3);
// l2.next.next = new ListNode(4);



// 测试数据 2
// var l1 = new ListNode(1);
// var l2 = new ListNode(1);



// 测试数据 3
// var l1 = new ListNode(9);
// var l2 = new ListNode(3);


// var result = mergeTwoLists(l1, l2);
// console.log(result);
