# `JavaScript`常见面试问题

## 前言

本轮面试全部手写！！！

全程高能！！！

1. 手写继承

2. 手写深拷贝、浅拷贝

   浅拷贝得到的对象和原对象保存对同一内存块的引用。

   常用方法有`Object.assign()`和扩展运算符`...`

   ```javascript
   let a = [1,2,3]
   let b = Object.assign(a)
   a[0] = 8
   a // [8,2,3]
   b // [8,2,3]
   ```

   ```javascript
   let a = [1,2,3,[1,2]]
   let b = [...a]
   a[3][1] = 8
   a //[1,2,3,[8,2]]
   b //[1,2,3,[8,2]]
   ```

   深拷贝开辟一块新的内存地址。

   常用方法`JSON.stringify()`,`deepClone`

   ```javascript
   let a = {
       a: 2,
       b: {
           c: 3
       }
   }
   let b = JSON.stringify(a)
   ```

   `JSON.stringify()`的缺点：

   + 对象为`Date()`时间对象将会序列化成字符串
   + 对象中有`RegExp`将会序列化成`{}`
   + 函数、`undefined`等均会造成对象的丢失。
   + 数字对象`NaN`,`Infinity`等会序列化成`null`
   + 造成构造函数的`constructor`丢失

   ```javascript
   let a = {
       b:1,
       c: {
           d: 2 
       }
   }
   function deepClone(obj) {
     let res = obj instanceof Array ? [] : {}
   	// 自身可枚举属性  
     for (let i in obj) {
       if (obj.hasOwnProperty(i)) {
         res[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
       }
     }
   }
   ```

3. 手写`promise`

4. 手写原生`Ajax`

5. 手写防抖、节流函数

6. 手写`new`

7. 手写`bind`,`call`,`apply`

8. 手写`markdown`格式转化

9. 手写图片懒加载

10. 函数科里化

