---
layout: post
title: Valaxy 与 Cloudflare 的邂逅——将 Valaxy 博客部署到 Cloudflare Pages
date: 2023-02-23 21:17:05
updated: 2023-02-23 21:17:05
tags:
  - Cloudflare
  - Valaxy
categories:
  - 一些小技巧
cover: https://img-blog.csdnimg.cn/ae652812f8114dc6b020f6d1865ecf1c.webp
excerpt_type: text
---

最近将博客从 Vercel 搬迁到了 Cloudflare Pages，页面加载速度感觉提升了一点。正好 Valaxy 对于使用 Cloudflare Pages 部署的文档还在编写，故以此为题作文一篇。

<!-- more -->

## 先决条件

首先，你需要准备这些东西：

- 一个 Cloudflare 账号；
- 一个 GitHub 账号；
- 一个使用 [Valaxy 框架](https://valaxy.site)搭建的博客；
- 一个托管于 Cloudflare 的域名。

## 新建 Pages 项目

登录 Cloudflare 仪表盘，在左侧的侧边栏中找到“Pages”，点击进入。

![](https://img-blog.csdnimg.cn/8f30e0013f034c0bb1bceb5676aa587a.png)

点击“创建项目”，然后选择“连接到 Git”，按照 Cloudflare 的引导进行 GitHub 账户的添加与 GitHub App 的安装。安装完成后即可返回该页面选择仓库。

此处仓库使用我早期 Valaxy 功能性测试时创建的独立仓库演示，版本为~~极其远古的~~ Valaxy 0.12.3。

![](https://img-blog.csdnimg.cn/bc80c4d7f2304e788f1fd7ed7795f2b4.png)

点击“开始配置”按钮，然后设置一个自己喜欢的项目名称、要部署的分支，“构建设置”请根据下图配置：

![](https://img-blog.csdnimg.cn/f91fa7c8eac74ab8aca635dd818ecbb8.png)

:::danger 注意
下方的环境变量也需要配置，否则 Valaxy 的构建将会因为 Node.js 版本低于 v14 而失败！
:::

配置完成后，点击“保存并部署”按钮，然后等待 Cloudflare Pages 的部署完成。

![](https://img-blog.csdnimg.cn/dc70f863359748a18eb9529ae2f0d44c.png)_部署成功后的提示_

## 添加自定义域名

然而 Cloudflare Pages 提供的 `pages.dev` 似乎已被屏蔽，因此我们需要绑定一个自定义域名。

点击“继续处理项目”，然后点击页面上的“设置自定义域”添加一个自定义域名。

![](https://img-blog.csdnimg.cn/2a0f275c174c4baa93b56c459c7fbfcd.png)

![](https://img-blog.csdnimg.cn/97079a9d64474d75abcd4e9d1642ecfd.png)

等待一段时间之后，就可以通过这个域名访问你的博客了。

大功告成！