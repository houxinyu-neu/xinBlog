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

## 第三天

1. 09两个栈实现队列

> 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
>
> 示例 1：
>
> 输入：
> ["CQueue","appendTail","deleteHead","deleteHead"]
> [[],[3],[],[]]
> 输出：[null,null,3,-1]
> 示例 2：
>
> 输入：
> ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
> [[],[],[5],[2],[],[]]
> 输出：[null,-1,null,null,5,2]

+ 思路：两个栈，一个负责输入，一个负责队列的输出。

```javascript
var CQueue = function () {
    this.stack1 = [], this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stack2.length > 0) {
        return this.stack2.pop()
    }
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop())
    }
    return this.stack2.pop() || -1
};
```

2. 30包含`min`函数的栈

> 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
>
> 示例:
>
> MinStack minStack = new MinStack();
> minStack.push(-2);
> minStack.push(0);
> minStack.push(-3);
> minStack.min();   --> 返回 -3.
> minStack.pop();
> minStack.top();      --> 返回 0.
> minStack.min();   --> 返回 -2.

+ 思路：使用额外的栈来维护最小值。

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.dataStack = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    const { dataStack, minStack } = this
    dataStack.push(x)
    if (!minStack.length || minStack[minStack.length - 1] >= x) {
        minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const { dataStack, minStack } = this
    if (dataStack[dataStack.length - 1] == minStack[minStack.length - 1]) {
        minStack.pop()
    }
    dataStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    const { dataStack, minStack } = this
    return this.dataStack[dataStack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    const { dataStack, minStack } = this
    return minStack[minStack.length - 1] || 0
};
```

3. 59滑动窗口的最大值

> 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
>
> 示例:
>
> 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
> 输出: [3,3,5,5,6,7] 
> 解释: 
>
>   滑动窗口的位置                最大值
> ---------------               -----
> [1  3  -1] -3  5  3  6  7       3
>  1 [3  -1  -3] 5  3  6  7       3
>  1  3 [-1  -3  5] 3  6  7       5
>  1  3  -1 [-3  5  3] 6  7       5
>  1  3  -1  -3 [5  3  6] 7       6
>  1  3  -1  -3  5 [3  6  7]      7

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = [], len = nums.length
    if (len <= 0 || k === 1) return nums
    for (let i = 0; i <= len - k; i++) {
        res.push(Math.max(...nums.slice(i, i + k)))
    }
    return res
};
```

4. 队列的最大值

> 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
>
> 若队列为空，pop_front 和 max_value 需要返回 -1
>
> 示例 1：
>
> 输入: 
> ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
> [[],[1],[2],[],[],[]]
> 输出: [null,null,null,2,1,2]
> 示例 2：
>
> 输入: 
> ["MaxQueue","pop_front","max_value"]
> [[],[],[]]
> 输出: [null,-1,-1]

+ 思路：维护一个最大值的额外队列。

```javascript
var MaxQueue = function () {
    this.dataQueue = [], this.maxQueue = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    const { dataQueue, maxQueue } = this
    return maxQueue[0] || -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    const { dataQueue, maxQueue } = this
    dataQueue.push(value)
    while (maxQueue && maxQueue[maxQueue.length - 1] < value) {
        maxQueue.pop()
    }
    maxQueue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    const { dataQueue, maxQueue } = this
    if (dataQueue[0] === maxQueue[0]) maxQueue.shift()
    return dataQueue.shift() || -1
};
```

