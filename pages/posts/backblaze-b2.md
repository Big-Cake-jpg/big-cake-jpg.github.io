---
title: 白嫖党福利——Backblaze B2 免费 10GB 对象存储
date: 2022-07-07 21:53:31
updated: 2022-07-07 21:53:31
tags: 
  - Backblaze
  - 白嫖
categories: 大蛋糕的安利
readmore: true
---
## 前言

其实 Backblaze 这个东西我今年初才听说，当时我疯狂的在网上搜可以白嫖的对象存储。

然后我就看到了 Backblaze B2，免费 10GB 对象存储 + 每天免费 1GB 下载流量。

> 感觉挺香的，你们觉得呢（

<!-- more -->

## 介绍

Backblaze，一个比较老牌的云存储服务商，成立于 2007 年。它致力于为用户提供价格低廉的存储服务。

可能你会看到它的一些报告，里面详尽的介绍了磁盘可靠性，合计磁盘可靠率，磁盘可靠的制造商等等一系列和机械硬盘有关的消息。

但我们今天的话题不是磁盘可靠性 blabla 的，我们要拿到它的 10GB 免费存储。

> 本篇文章开始将全部采用 Backblaze B2 + Cloudflare 作为图床，也请在评论区留言图片加载速度

## 步骤

### 注册账号

[注册链接](https://www.backblaze.com/b2/sign-up.html?referrer=nopref)

然后输入你的邮箱和密码，点击下面的“Region”选择存储服务所在地区，可以选择 US West 或者 EU Central；

> 我注册时选的是 US West 即美国西部。你可以自己去测试两个地区哪个速度更快。

![注册](https://cdn.cakeskin.tk/images/backblaze-b2/Register.png)

登录账号，我们就来到了后台。

### 创建存储桶

点击“Create a new bucket”创建一个存储桶，名字随意，我这里用博客的桶进行演示；

![创建存储桶](https://cdn.cakeskin.tk/images/backblaze-b2/Create-Bucket.png)

创建好以后，我们点击“Bucket Settings”，然后就可以对存储桶进行设置；

接下来，在 `Bucket Info` 里填入 `{"cache-control":"max-age=31536000"}` 设置缓存时长，为之后设置 Cloudflare 做准备；

![Bucket Info](https://cdn.cakeskin.tk/images/backblaze-b2/Bucket-Info.png)

然后保存设置，点击“Upload/Download”按钮，就可以进入文件管理页面；

将你的文件上传上去，点击旁边的信息按钮，就可以看到这个文件的详细信息了。

![详细信息](https://cdn.cakeskin.tk/images/backblaze-b2/Details.png)

### 接入 Cloudflare

Cloudflare 和 Backblaze 有合作关系，使用 Cloudflare 接入 Backblaze B2 可以免除流量费用。

我们记下 Friendly URL 的根域名，比如我这里就是 `f004.backblazeb2.com`。

让我们打开 Cloudflare 后台，登录账号，选择域名。

记录类型选 CNAME，名称填一个自己喜欢的名字，然后将根域名填进目标，打开小黄云。

![添加解析记录](https://cdn.cakeskin.tk/images/backblaze-b2/Add-Record.png)

保存以后，打开“页面规则”，添加一个规则，如下图：

![页面规则](https://cdn.cakeskin.tk/images/backblaze-b2/Page-Rules.png)

保存以后，所有的事情就完成了！

接下来，把 Friendly URL 中的根域名换成你自己接入 Cloudflare 的域名就可以了，试试看！

## 效果展示

下面的图片与视频是通过 Cloudflare + Backblaze B2 加载的，视频分辨率为 720P。

![示例图片](https://cdn.cakeskin.tk/images/bg-bright.png)

<video controls>
    <source src="https://cdn.cakeskin.tk/images/backblaze-b2/levitated-trailer.mp4" type="video/mp4">
</video>

<div class="info">

> 在此墙裂要求 mr普拉斯打钱（雾

</div>

我们可以看到有了 Cloudflare 的加持，Backblaze 外链速度还是挺快的。

使用 Microsoft Edge DevTools 查看元素，我们发现二者都已命中缓存：

![缓存](https://cdn.cakeskin.tk/images/backblaze-b2/Cache-Hit.png)

至此，我们的设置就完成了！开始体验吧！

<div class="info">

> 如果你有 ImgURL Pro，那么可以将 Backblaze B2 作为图床快捷上传。

</div>
