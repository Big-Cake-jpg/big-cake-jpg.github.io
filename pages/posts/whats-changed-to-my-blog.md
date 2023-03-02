---
layout: post
title: 为了纯粹的快——来看看我对我的博客做了什么
date: 2023-03-02 19:23:08
updated: 2023-03-02 19:23:08
tags: 
 - 速度
 - 静态博客
 - 优化
categories: 报告
excerpt_type: text
cover: https://blog-api.lihaoyu.cn/images/posts/whats-changed-to-my-blog/cover.webp
---

只为了更快：性能与美观优先，这几个月我对我的博客做出了一些大的更改。

<!-- more -->

## 服务器与 CDN

如果我不说的话，你可能很难相信我的博客使用的是 Cloudflare CDN。

几个月前，我将我的博客挂在了 Vercel 上，后来~~异想天开~~想要加入 HSTS Preload List 时发现 Vercel 的响应头不好改（指必须修改 `vercel.json`），于是索性把整个域名的 Name Server 换到了 Cloudflare 上，速度也没那么不堪。

后来在对 Cloudflare Pages 进行博客加载性能测试时，DevTools 显示的加载完成时长明显比 Vercel 的时间短很多，因此我在上周将博客迁移到了 Cloudflare Pages 上。这样，因为没有了回源延迟，加载速度快了很多。

在十年之约与开往的 QQ 群中，我将博客的链接发了出来请求大家访问一下，以便获得足够的反馈。基本上大多数反馈给我的信息就是：第一次加载 3 到 5 秒内完成，最长 6 秒；第二次加载由于有了缓存，所以基本保持在 1 - 3 秒内加载完成。这说明目前的访问体验较博客初期好了很多。

## 框架

**之前**，我使用 Hexo 作为博客框架，使用 Yun 作为主题。

Yun 主题的一个特点就是完全不需要依赖 jQuery，所有资源文件均使用公共 CDN，这从根本上加快了博客的加载速度，而我只需要解决图床的问题。

但是你可能会说：“以前？那现在呢？难道除了 Hexo 还有别的好用的静态博客生成器吗？”

是这样的。如果你把页面滚动到最底部，就可以在页脚上发现这样一行字：

> 由 [Valaxy](https://github.com/YunYouJun/valaxy) v0.14.15 驱动 | 主题 - [Yun](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-yun) v0.14.15

我的博客现在使用 Valaxy 作为生成器，由于框架的开发使用的是 Vue 3、Vite 4、ESBuild，因此我的博客可以拥有优秀的页面切换体验、页面热更新、组件按需打包，同时可以任意使用 Vite 和 Vue 的插件。

Valaxy 的 Yun 主题也同样继承了 Hexo 版本的优良特性与功能，因此我没有花费太多精力就将博客迁移到了 Valaxy。

![](https://blog-api.lihaoyu.cn/images/posts/whats-changed-to-my-blog/commit-info.webp)

## 图床

> [晓雨's Blog API](https://blog-api.lihaoyu.cn)

前几篇文章我一直使用的是 CSDN 和 米游社的图床，但是最终还是因为没有缓存的原因转向了自建。

目前的解决方案是使用 Vercel + Cloudflare 加载，也有以前的 Cloudflare R2 和 Backblaze B2 图床。

不过自建图床预计之后会长期使用。大概就是这样了吧。