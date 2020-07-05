# `JavaScript`面试问题中

## 前言

理论多

1. 闭包

2. 跨域

3. 事件执行顺序

4. `this`绑定、`this`指向

5. 作用域、作用域链

6. ES6新特性

7. 异步

8. 类型转换

9. 类型判断

10. 数组

11. `JavaScript`解析过程

12. `JavaScript`事件机制

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