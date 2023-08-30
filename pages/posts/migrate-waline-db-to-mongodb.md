---
layout: post
title: 将 Waline 从 LeanCloud 迁移到 MongoDB Cloud
date: 2023-08-30 10:34:58
updated: 2023-08-30 10:34:58
tags:
  - Waline
  - LeanCloud
  - MongoDB
  - 速度
catrgories: 优化
---
## 前言

从 Hexo 时代开始，我的 Waline 就是托管在 Vercel 的，而数据存储使用的是 LeanCloud 国际版。这也是 Waline 官方最推荐的部署方式。虽然简单，但是时间长了 Waline 的速度必然会受制于 LeanCloud。之前 [杜老师](https://dusays.com) 就在我博客的[「谈人际交往」](https://lihaoyu.cn/posts/talk-about-communications)这篇文章下评论说我的 Waline 加载速度太慢了。

![1693363403499.webp](https://r2.lihaoyu.cn/2023/08/30/64eead7ab8b9e.webp)

我自己后来翻文章、回复评论的时候也发现加载速度上的一些问题，便决定切换数据库，从 LeanCloud 迁出来优化评论区的性能。

<!-- more -->

## 过程

### 配置数据库与 Waline

首先，我在 MongoDB Cloud 上创建了一个位于中国香港地域的 Azure 免费的 M0 数据库，存储空间大小是 512 MB，对 Waline 来说可谓绰绰有余了。如果不够了，以后再迁到 5 GB 免费的 TiDB 也可以。

创建好以后，在 “Network Access” 页面放行所有 IP 的访问请求，然后复制一下 SRV 格式的连接串。在 Navicat 里使用连接串连接到 MongoDB 之后创建一个名为 `waline` 的数据库，记好名字备用。

打开部署在 Vercel 上的 Waline 项目，转到环境变量设置，删除原有的 LeanCloud 相关配置项，然后依照 [Waline 的文档](hhttps://waline.js.org/guide/database.html#mongodb)填写好 MongoDB 的连接信息。这里有一点需要注意：MongoDB Cloud 的 M0 数据库是没有集群信息的，如果设置了错误的 `MONGO_REPLICASET`，会导致 Waline 在获取评论信息时出现 `500` 连接超时错误。我当时迁移的时候就是卡在了这里，后来搜索到了 Waline 仓库里的一个 Issue 才知道这个问题。

> 多机连接信息可以在这里找到：
> 
> ![1693364544500.webp](https://r2.lihaoyu.cn/2023/08/30/64eeb1460acc0.webp)_选择 `Drivers` 作为连接方式，`Driver` 为 Node.js，`Version`为 `2.2.12 or later`_
> 
> 其中形似黄色荧光笔勾住的部分即是多机连接信息，不要带端口号，按照 Waline 文档内的格式将其依次填入环境变量。

:::warning 注意
你的 Vercel 项目的地域也需要设置在与数据库所在地域相同的地域或者尽可能靠近，否则速度会大打折扣！

![1693365560260.webp](https://r2.lihaoyu.cn/2023/08/30/64eeb54319853.webp)_数据库所在地域_

![1693365602464.webp](https://r2.lihaoyu.cn/2023/08/30/64eeb56b2b670.webp)_项目所在地域_
:::

### 备份与恢复数据

配置好之后，先去 Waline 管理后台“导入导出”页面导出所有数据，如果一段时间后浏览器没有自动下载导出的 JSON，很可能是因为 Vercel 的无服务器函数超时了，此时尝试再执行一次导出操作应该就能导出了。

导出的是标准的 JSON，包含了所有的评论与注册用户的信息。将其留下来，不要删除，然后在 Vercel 上重新部署一次 Waline。部署完成之后访问管理页面，重新注册账号或者使用 OAuth 注册账号。登录之后，再在“导入导出”页面执行一次导入操作，然后选中此前导出的包含 Waline 所有数据的 JSON 文件，Waline 就会开始自动进行导入与索引建立操作了。

这里建议打开浏览器的 DevTools，切换到“网络”面板，这样在一定程度上可以判断 Waline 的导入操作是否正常进行。如果导入突然停止并且管理页面的进度指示没有走完就消失掉的话，多半是 Vercel 的无服务器函数超时了（Hobby 计划的每个 Vercel 无服务器函数最长只能持续运行 10 秒，否则会超时并返回 `504` 错误）。这时候不管怎么样，重新执行一次导入操作，应该就可以了。

> 这里我并没有遇到导入失败的情况，只能提供一个这样的解决方案了。

导入完成之后，应该就一切正常了。退出评论区的登录状态，用原来 LeanCloud 作为数据库时 Waline 的账号密码进行登录即可。之后多翻翻博客的每一篇文章，你会发现评论的加载速度有了极大提升。到演示页面测试一下评论，也会发现相比 LeanCloud 有了极大提升。

### 其他优化

MongoDB 有一个“索引”功能，能够在一定程度上加快读取大的集合时数据库的响应速度。因此，为一些太大的集合设置索引能够提升 Waline 的响应速度。

这些大体量的集合通常是页面浏览量和评论信息（`Counter` 和 `Comment` 集合），因此为它们设置索引即可。

## 参考

[Hexo去LeanCloud依赖 | Finisky Garden](https://finisky.github.io/hexormleancloud/)
