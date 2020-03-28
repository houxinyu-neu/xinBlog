# 剑指`Offer`

## 第一天

**收获：**

**若想获取链表中倒数某些位的结果，可采取双指针的策略进行。**

1. 从头到尾打印链表。

> 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。 
>
> 示例 1：
>
> 输入：head = [1,3,2]
> 输出：[2,3,1]
>
>
> 限制：
>
> 0 <= 链表长度 <= 10000

```javascript
var reversePrint = function (head) {
    let res = []
    while (head) {
        res.push(head.val)
        head = head.next
    }
    return res.reverse()
}; 
```

2. 链表中倒数第`K`个节点。

> 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
>
> 示例：
>
> 给定一个链表: 1->2->3->4->5, 和 k = 2.
>
> 返回链表 4->5.
>

```javascript
var getKthFromEnd = function (head, k) {
    let fast = head, slow = head, index = 0
    while (index < k) {
        fast = fast.next
        index++
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};
```



