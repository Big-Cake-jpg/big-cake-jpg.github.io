---
layout: post
title: 自建 jsDelivr 镜像
date: 2023-05-03 12:17:12
updated: 2023-05-03 12:17:12
cover: https://r2.lihaoyu.cn/2023/05/03/6451e2aacc37e.webp
tags:
  - CDN
  - 白嫖
categories: 大蛋糕的安利
---

花了点时间，简单做出来的。

<!-- more -->

## 前言

之所以做这个，主要是因为大部分的 jsDelivr 镜像都不允许用于加速图片，而自己早期的文章还有一堆仍在 GitHub 未迁移的图片。

也正是因为允许用于加速图片，才使用 Cloudflare CDN 分发资源以至于不让 Vercel 那 100 GB 流量被快速消耗完的同时防范攻击。

看到网上同类项目不算多，因此想着做了一个。

## 使用方法

Endpoint：`https://jsd.lihaoyu.cn`

只需要将 `https://cdn.jsdelivr.net` 替换为 `https://jsd.lihaoyu.cn` 即可。

文件结构遵循 jsDelivr 原有结构，建议在生产环境中指定版本号，防止因缓存原因造成不必要的麻烦。

示例：
```diff
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
-   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
+   <link rel="stylesheet" href="https://jsd.lihaoyu.cn/npm/bulma@0.9.4/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
      <figure class="image is-128x128">
-       <img class="is-rounded" src="https://cdn.jsdelivr.net/gh/Big-Cake-jpg/Image_For_My_Blog/20230404_124948000_iOS.jpg">
+       <img class="is-rounded" src="https://jsd.lihaoyu.cn/gh/Big-Cake-jpg/Image_For_My_Blog/20230404_124948000_iOS.jpg">
      </figure>
    </div>
  </section>
  </body>
</html>
```

## 缓存刷新

缓存刷新这里我没什么办法解决。

如果要刷新的话，可以在评论区留言，我每周末统一刷新一次吧。