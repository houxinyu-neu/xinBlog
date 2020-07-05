# 	DNS解析

### DNS是什么

DNS是因特网提供的服务，查询域名和IP地址映射的分布式数据库将域名还原为IP地址。

### DNS解析过程

1. 缓存查询
   依次查询浏览器，本地磁盘和路由器缓存所保存的IP地址。
   若查询失败则进行服务器查询
2. 根域名服务器、顶级域名服务器、权限域名服务器
   根域名服务器，[13台IPV4+25台IPV6（雪人计划）](https://baike.baidu.com/item/根域名服务器/5907519?fr=aladdin#2)

<img src="https://img-blog.csdnimg.cn/20200301162311967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNzgxMjkx,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" style="zoom:50%;" />

3. 服务器查询

   **客户端递归查询本地域名服务器，本地域名服务器迭代查询根域名服务器、顶级域名服务器和权限域名服务器。**

   + 本地域名服务器递归查询，若查询到则返回IP地址，若未查询到则继续查询根域名服务器。

   + 根域名服务查询IP地址，若查询到则返回，若未查询到则前往顶级域名服务器。
   + 顶级域名服务器若查询到则返回，若未查询到则前往权限域名服务器。
   + 权限域名服务器中得到IP地址。

   <img src="https://img-blog.csdnimg.cn/20200301162236689.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNzgxMjkx,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" style="zoom:50%;" />