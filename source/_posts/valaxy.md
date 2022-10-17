---
title: Valaxy —— 快到没边的全新静态博客框架
date: 2022-10-17 08:35:47
updated: 2022-10-17 08:35:47
tags:
 - 静态博客
categories: 大蛋糕的安利
---
## 前言

其实我已经关注云游君的 [Valaxy](https://valaxy.site) 很久了，无奈没有条件只能一直用 Hexo。

最近上网课拿到电脑，便想着“不然把博客迁移到 Valaxy 吧”，便打开了 Valaxy 的文档开始一顿操作，设置好以后已经基本处于可以用在生产环境的情况了。

同时我也感受到了它超快的速度以及原生的页面热重载，便打算把它介绍给大家。

<!-- more -->

## 开始

> ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness

### 本地初始化

[项目地址](https://github.com/YunYouJun/valaxy)

新建一个文件夹，然后在这个文件夹内打开终端，输入如下内容进行初始化：

```bash
npm init valaxy
# `pnpm create valaxy` is recommened by author
```

根据命令行提示即可完成项目初始化。默认使用 Yun 主题，也可以选择文档主题（theme-press）。

进入到生成的项目文件夹内，输入指令安装依赖并启动本地预览

```bash
npm install 
# yarn
npm run dev
# yarn dev
```

本地预览启动以后，可以访问 `http://localhost:4859` 查看效果。然后就可以修改 `valaxy.config.ts` 来自定义你的博客了。

### 自动构建

可以使用 GitHub Pages/Netlify/Vercel/Cloudflare Pages。

`.github/workflows/gh-pages.yml` 将会自动部署 GitHub Pages，其他请参考文档。

### 手动部署

输入如下指令生成静态文件，然后就可以把 `dist` 文件夹下的内容部署到自己的服务器上了：

```bash
npm run build
# npm run build:spa for SPA
```

## 注意事项

Valaxy 目前还处于早期开发阶段，Yun 主题的功能仅复刻了 Hexo 版本的主要功能，你可以通过反馈 Bug/捐助云游君来支持 Valaxy 的开发。

> ~~现在使用就是高贵的内测用户~~