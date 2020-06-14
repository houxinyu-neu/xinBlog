# Nuxt.js踩坑

​	最近进行自己第一版Nuxt+ts博客的建站，将Nuxt+ts过程中的一些坑在此记录。

## Interface 'NuxtApp' incorrectly extends interface 'Vue'.

​	Nuxt集成ts和element后会运行会出现这个错误，虽然并不影响编译。但根本原因在于`element-ui`中的`$loading`和`nuxt`中的`$loading`产生冲突。详情可以看GitHub的[issues](https://link.zhihu.com/?target=https%3A//github.com/nuxt/typescript/issues/49)。这里直接亮出暂时解决方案。修改`tsconfig.json`中的`compilerOptions`，添加`"skipLibCheck": true`。