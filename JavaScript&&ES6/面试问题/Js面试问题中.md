# `JavaScript`面试问题中

## 前言

理论多

1. `JavaScript`数据类型

   + 基本数据类型

     + Undefined
       声明后并未赋值的变量为`undefined`
       `typeof`未声明的变量同样返回`undefined`

     + Null

       `undefined`派生自`null`因此`null == undefined`

     + Boolean
       只有两个字面值`true`和`false`

     + Number

       Js使用`IEE754`双精度记录浮点数，只保留小数点后17位。因此`0.1+0.2==0.3 ;//false`

       `NaN == NaN;//false`

       `Number`和`parseInt`

     ```javascript
     Number(true)//1
     Number("")//0
     Number(null)//0
     Number(undefined)//NaN
     ```

     ```javascript
     parseInt(true)//NaN
     parseInt("")//NaN
     parseInt(null)//NaN
     parseInt(undefined)//NaN
     ```

     + String
       区分`toString()`和`String()`

       `String`,`Number`,`Boolean`,`Object`均可以使用`toString()`方法。而`Null`和`Undefined`类型只能使用`String()`方法。

   + 引用数据类型
     1. Object
     2. Array
     3. Date
     4. RegExp
     5. Function

   + 薛定谔的对象

     **由于`JavaScript`采取低位二进制存储变量**

     ```javascript
     typeof "aa" == "string" //true
     typeof 	undefined == "undefined"//true
     typeof null == "object" //true
     null instanceof Object //false
     ```

2. 跨域

3. 事件事件循环

   Js的执行机制如下（事件循环）

   - 判断Js代码是同步还是异步，同步就进入主线程执行栈，异步就进入事件表。
   - 异步事件在事件表中注册回调函数，回调函数触发后进入事件队列。
   - 当主线程空闲时查看事件队列中是否有空闲的异步事件，若有就推入主线程。
   - <img src="https://img-blog.csdnimg.cn/20200302213340154.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNzgxMjkx,size_16,color_FFFFFF,t_70" alt="Js运行机制" style="zoom:50%;" />

   问题一：Js如何知道主线程的执行栈为空？
   js引擎有一个进程持续检查主线程，若主线程执行栈为空则检查事件队列，查看是否有被调用的回调函数。

   + 宏任务和微任务
     宏任务macro-task和微任务micro-task
     **宏任务：整体代码`<script>,setTimeout(),setInterval()`**
     **微任务：`promise,process.nextTick`**
     不同的任务所进入的事件队列也不一样
     执行顺序：
     按照顺序执行宏任务（整体代码），执行微任务。完成第一回循环，再次从宏任务开始，执行微任务完成后继续循环。

   ```javascript
   console.log('1');
   
   setTimeout(function() {
       console.log('2');
       process.nextTick(function() {
           console.log('3');
       })
       new Promise(function(resolve) {
           console.log('4');
           resolve();
       }).then(function() {
           console.log('5')
       })
   })
   process.nextTick(function() {
       console.log('6');
   })
   new Promise(function(resolve) {
       console.log('7');
       resolve();
   }).then(function() {
       console.log('8')
   })
   
   setTimeout(function() {
       console.log('9');
       process.nextTick(function() {
           console.log('10');
       })
       new Promise(function(resolve) {
           console.log('11');
           resolve();
       }).then(function() {
           console.log('12')
       })
   })
   // 1,7,6,8,2,4,3,5,9,11,10,12
   ```

4. `this`绑定、`this`指向

5. ES6新特性

6. 异步请求

   + `axios`

     基于`Promise`，在浏览器中通过`XHR`，在`node`中通过`http`请求。可防止两种攻击，并且支持请求拦截。

   + `fetch`

     浏览器原生接口，为替代`Ajax`。基于`Promise`实现。缺点在于原生无法监听请求进度，对400和500的响应无法区分。

   + `Ajax`

     基于`XMR`实现，原生具有`CSRF`和`XSS`攻击的可能。

7. 类型判断和类型转换

8. 数组

9. `JavaScript`解析过程

10. `JavaScript`事件机制

- 事件捕获：从不具体元素逐级向下，在事件为运行时捕获。事件冒泡：从具体元素向上。

  <img src="https://img-blog.csdnimg.cn/20200302173455737.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNzgxMjkx,size_16,color_FFFFFF,t_70" alt="Js事件流" style="zoom:50%;" />

- 事件处理`addEventListener()`和`removeEventListener`

  ```javascript
  var btn = document.getElementById("myButton")
  btn.addEventListener("click",function(e){
  	console.log(this.id)
  	e.stopPropagation()//阻止事件冒泡
  },false)
  ```

+ 事件委托

  指定事件处理程序管理响应类型的所有事件

  ```javascript
  var btn = document.getElementById("myButton")
  btn.addEventListener("click",function(e){
  	e.stopPropagation()//阻止事件冒泡
  	switch(e.id){
  		case "doSomething":
  			//do something
  			break;
  		case "goSomething":
  			//go something
  			break;
  }
  },false)
  ```

  



​	