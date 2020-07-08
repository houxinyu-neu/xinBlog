# `vue`面试题上

1. `vue`双向绑定

2. `vue`生命周期

   + `activated`和`deactivated`是钩子函数`keep-alive`独有。组件切换时不被销毁而是缓存到内存中执行`deactivated`，命中缓存后执行`activated`

   <img src="https://img-blog.csdnimg.cn/20200305111847565.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNzgxMjkx,size_16,color_FFFFFF,t_70" alt="Vue生命周期" style="zoom:50%;" />`

3. 组件传值

4. `SPA`和`SSR`

5. 虚拟`DOM`和`Diff`算法

6. `VueX`

7. `vue-router`的原理

   **`SPA`单页应用，`vue-router`通过改变`URL`实现不请求页面数据的情况下更新页视图。**

   vue-router 提供了三种运行模式：

   +  hash: 使用 URL hash 值来作路由。默认模式。

     ```javascript
     window.addEventListener('hashchange', () => {}, false)
     ```

   + history: 依赖 HTML5 History API 新增的`pushState`和`replaceState`（可对浏览器历史记录栈进行修改）。查看 HTML5 History 模式。

     ```javascript
     window.addEventListener('popstate', () => {}, false)
     ```

   + abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端

   两种对比：`HTML5 History`的模式相比`hash`有如下优势

   + `pushState`可修改为同源下的任意`URL`，而`hash`直能修改`#`下的。
   + `pushState`可设置新的`URL`与原来一致。
   + `pushState`可传递对象数据类型，而`hash`只能传递短字符串。

8. `axios`

9. `watch`的实现原理

   