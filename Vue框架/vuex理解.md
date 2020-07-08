### Vuex是什么？

Vuex是专门为Vue服务，用于管理页面的数据状态、提供统一数据操作的生态系统，相当于数据库mongoDB，MySQL等，任何组件都可以存取仓库中的数据。其中vuex类似的 还是有Redux,Redux大多用于React,针对Redux后续在做补充，现在就让我们好好了解下Vuex到底是个啥东西？

概念理解性（必读）

Vuex采用MVC模式中的Model层，规定所有的数据必须通过action--->mutaion--->state这个流程进行来改变状态的。再结合Vue的数据视图双向绑定实现页面的更新。统一页面状态管理，可以让复杂的组件交互变的简单清晰，同时在调试时也可以通过DEVtools去查看状态。

在当前前端的spa模块化项目中不可避免的是某些变量需要在全局范围内引用，此时父子组件的传值，子父组件间的传值，兄弟组件间的传值成了我们需要解决的问题。虽然vue中提供了props（父传子）commit（子传父）兄弟间也可以用localstorage和sessionstorage。但是这种方式在项目开发中带来的问题比他解决的问题（难管理，难维护，代码复杂，安全性低）更多。vuex的诞生也是为了解决这些问题，从而大大提高我们vue项目的开发效率。

抛出问题 使用Vuex只需执行 Vue.use(Vuex)，并在Vue的配置中传入一个store对象的示例，store是如何实现注入的？state内部是如何实现支持模块配置和模块嵌套的？在执行dispatch触发action（commit同理）的时候，只需传入（type, payload），action执行函数中第一个参数store从哪里获取的？如何区分state是外部直接修改，还是通过mutation方法修改的？调试时的“时空穿梭”功能是如何实现的？

### vue和vuex的区别与联系



<img src="https://pic1.zhimg.com/v2-ef8716a11dd5b2adb503344dee0a7080_b.jpg" alt="img" style="zoom:50%;" />



看一下这个vue响应式的例子，vue中的data 、methods、computed，可以实现响应式。

视图通过点击事件，触发methods中的increment方法，可以更改state中count的值，一旦count值发生变化，computed中的函数能够把getCount更新到视图。

```javascript
<div id="app">
        <button @click="increment"></button>
        {{getcount}}
    </app>
    new Vue({
        el: "#app",
        // state
        data () {
         return {
            count: 0
         }
        },
         // view
        computed: {
            getCount(){
                return this.count
            }
        },
        // actions
        methods: {
         increment () {
            this.count++
         }
        },
    })
```

那么vuex又和vue这个响应式的例子有什么关系呢？我们可以用vuex实现和vue同样的响应式功能。其实他们原理时一样的，vuex中也有四个属性值：state、getters、mutations、actions。。在没有actions的情况下：数据：state --> data 获取数据：getters --> computed 更改数据：mutations --> methods

视图通过点击事件，触发mutations中方法，可以更改state中的数据，一旦state数据发生更改，getters把数据反映到视图。

那么actions,可以理解处理异步，而单纯多加的一层。

既然提到了mutions actions这时候 就不得不提 commit dispatch，这两个有什么作用呢？

在vue例子中，通过click事件，触发methods中的方法。当存在异步时，而在vuex中需要dispatch来触发actions中的方法，actions中的commit可以触发mutations中的方法。同步，则直接在组件中commit触发vuex中mutations中的方法。

<img src="../../../AppData/Roaming/Typora/typora-user-images/image-20200708220215332.png" alt="image-20200708220215332" style="zoom:50%;" />



### 原理总结：

Vuex是通过全局注入store对象，来实现组件间的状态共享。在大型复杂的项目中（多级组件嵌套），需要实现一个组件更改某个数据，多个组件自动获取更改后的数据进行业务逻辑处理，这时候使用vuex比较合适。假如只是多个组件间传递数据，使用vuex未免有点大材小用，其实只用使用组件间常用的通信方法即可。

### 常见面试题：

**1、vuex有哪几种属性？**
答：有五种，分别是 State、 Getter、Mutation 、Action、 Module

**2、vuex的State特性是？**
答：
一、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于与一般Vue对象里面的data
二、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新
三、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

**3、vuex的Getter特性是？**
答：
一、getters 可以对State进行计算操作，它就是Store的计算属性
二、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
三、 如果一个状态只在一个组件内使用，是可以不用getters

**4、vuex的Mutation特性是？**
答：
一、Action 类似于 mutation，不同在于：
二、Action 提交的是 mutation，而不是直接变更状态。
三、Action 可以包含任意异步操作

**5、Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？**
答：
一、如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。
二、如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用，并包装成promise返回，在调用处用async await处理返回的数据。如果不要复用这个请求，那么直接写在vue文件里很方便。

**6、不用Vuex会带来什么问题？**
答：

一、可维护性会下降，你要想修改数据，你得维护三个地方

二、可读性会下降，因为一个组件里的数据，你根本就看不出来是从哪来的

三、增加耦合，大量的上传派发，会让耦合性大大的增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。

但兄弟组件有大量通信的，建议一定要用，不管大项目和小项目，因为这样会省很多事