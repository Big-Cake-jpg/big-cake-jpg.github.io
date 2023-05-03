---
layout: post
title: 渺软公益 CDN
date: 2023-05-01 14:40:11
updated: 2023-05-01 14:40:11
cover: https://r2.lihaoyu.cn/2023/05/01/644f65d2d92ae.webp
tags:
  - CDN
categories: 
  - 大蛋糕的安利
---
又是一个快速的公共 CDN 镜像，感谢 [Zkeq](https://icodeq.com) 提供的服务。

<!-- more -->

## 介绍

这个 CDN 我用了挺长时间的了，服务比较全面，有 UNPKG、jsDelivr、cdnjs 的镜像，同时也有字体文件加速，甚至和网盾星球有合作。

国内加速走的是字节火山引擎和多吉云 CDN，国外走的是 Cloudflare CDN，速度还是挺快的。

## 使用方法

官网：https://cdn.onmicrosoft.cn

只需要简单将 `unpkg.com` 和 `cdn.jsdelivr.net` 替换为 `npm.onmicrosoft.cn` 和 `jsd.onmicrosoft.cn` 即可。 

赞助后可以拿到刷新缓存用的 Token，但需要注意的是你应该在遵守 EULA 的情况下使用，不允许加速图片资源和自己的大型字体文件，否则将会被封禁 Referrer 和链接。

我自己用了很长一段时间，体验还是很不错的，希望像这样的公益项目能走的更远。

## 限制

目前只支持加速 CSS、JS 等资源，官网上写的是每个域名每天有 24 GB 的流量限制，实际上似乎没达到过。

诸如 npm 建站、GitHub 图床这类行为会被列入 Abuse 列表并封禁，且用且珍惜，滥用请绕道而行。