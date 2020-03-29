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

## 第二天

**收获：**

**对于链表的遍历一般采取双指针策略，一个遍历当前节点，一个遍历后一节点。**

**对于链表进行深拷贝复制，可采取递归的策略，并配合`Map`进行新旧链表的映射。**

****

1. 反转链表

> 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
>
> 示例:
>
> 输入: 1->2->3->4->5->NULL
> 输出: 5->4->3->2->1->NULL
>
>
> 限制：
>
> 0 <= 节点个数 <= 5000

```javascript
var reverseList = function (head) {
    let prev = null, curr = head
    while (curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
};
```

2. 复杂链表的复制

> 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
>
> 示例 1：
>
> 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
> 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
> 示例 2：
>
> 输入：head = [[1,1],[2,1]]
> 输出：[[1,1],[2,1]]
> 示例 3：
>
> 输入：head = [[3,null],[3,0],[3,null]]
> 输出：[[3,null],[3,0],[3,null]]
> 示例 4：
>
> 输入：head = []
> 输出：[]
> 解释：给定的链表为空（空指针），因此返回 null。

```javascript
var copyRandomList = function(head) {
    function copy(node) {
        if(node == null) return node
        if(isRead.get(node)) return isRead.get(node)
        let newNode = new Node(node.val)
        isRead.set(node, newNode)
        newNode.random = copy(node.random)
        newNode.next = copy(node.next)
        return newNode
    }
    let isRead = new Map()
    return copy(head)
};
```





