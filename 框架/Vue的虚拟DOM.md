# `Vue`的虚拟`DOM`

好饭不怕晚，沉淀下来收收心！我们虽然走的慢，但是却从未停下脚步！

## 实际`DOM`构建

https://juejin.im/post/59c60691518825396f4f71a1

## 虚拟`DOM`

用`JavaScript`来模拟`DOM`对象。

将`DOM`的节点名、属性、子节点映射到虚拟`DOM`上。

## `diff`

平层比较。虚拟`DOM`和真实`DOM`的差异。

深度遍历记录差异。

+ 节点类型改变。
+ 节点属性改变。比较新老属性。递归遍历子节点。
+ 节点文本改变。替换文本值。
+ 新增、删除、修改节点。

## `patch`

将差异对象应用到真正的`DOM`树中。

https://www.jianshu.com/p/af0b398602bc

https://juejin.im/post/5c8e5e4951882545c109ae9c