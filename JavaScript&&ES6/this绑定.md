# 浅谈`this`指向

2020.5.14文

`this`的的绑定有四种，他们的优先级顺序如下：

**`new`>`call`,`apply`显示绑定>隐式绑定>默认绑定**

## 默认绑定

函数独立调用时`this`指向全局对象。

实例代码

```javascript
var a = 5;
function foo(){
    console.log(this.a)	//foo()执行会得到5
}
function bar(){
    var a = 2
    foo()
}
bar()	//此时this指向全局，所以仍得到5
```

## 隐式绑定

函数调用有引用上下文时会绑定至最后一层上下文环境中。

实例代码

```javascript
var a = "global"
function foo(){
    console.log(this.a)
}
var bar = {
    a : "partical",
    foo:foo
}
bar.foo()	//此时this隐式绑定到bar的上下文中，所以得到"partical"
let i = bar.foo
i()			//此时this隐式绑定丢失，this指向全局对象，所以得到"global"
```

## 显示绑定

使用`call`和`apply`对原函数的`this`指针绑定到新的对象上。

```javascript
function foo(){
    console.log(this.a)
}
var bar = {
    a:5
}
foo.call(bar)//将foo的this指针绑定到bar对象上，所以得到5
function joo(){
    foo.call(bar)
}
joo.call(window)//显示绑定后不会改变，所以仍得到5
setTimeout(joo,100)//显示绑定后不会改变，所以仍得到5
```

## `new`绑定

使用`new`运算符得到一个对象时，会将`this`指向该对象。

```javascript
function Person(age){
    this.age = age
}
let tom = new Person(15)
tom.age	//new运算符将this绑定至Person对象，所以得到15
```

## 对比箭头函数和闭包的`this`

+ 箭头函数中的`this`

```javascript
var a = 5
function foo(){
    setTimeout(()=>{
          console.log(this.a)
    },100)
}
var obj = {
    a:8
}
foo.call(obj)//箭头函数的this绑定与词法作用域，所以得到8
```

+ 闭包中的`this`

```javascript
var a = 5
function foo(){
    setTimeout(function(){
          console.log(this.a)
    },100)
}
var obj = {
    a:8
}
foo.call(obj)//闭包中的this只能访问到自己的上下文，所以相当于是window下，得到5
```

