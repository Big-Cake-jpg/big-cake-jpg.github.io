---
abbrlink: ''
categories:
- - 见证历史
date: '2022-10-02 18:40:35'
tags:
- Google
- 翻译
title: 见证历史了——谷歌取消大陆地区翻译服务
updated: '2022-10-02 19:53:24'
---
近几天在群里聊天，发现几乎每个群都在传 Chrome 翻译用不了了和竹新社的新闻，一搜才知道原来谷歌把国内的翻译服务 translate.google.cn 停止了。理由是“低使用率”。

> *根据Reddit上的用户反馈和网站档案，Google在过去24小时内的某个时间点将translate.google.cn的Google翻译界面换成了一个普通的Google搜索页面。***——cnBeta**

停止以后，在访问 translate.google.cn 时只能看到和 google.cn 相同的一张图片。如下图。

![](https://img-blog.csdnimg.cn/600f4206eda04ec1ad93092be8c41d56.webp)

目前，大陆地区搜索服务的关闭使得部分的 Chrome 用户无法正常使用内置的翻译服务。唯一的解决方案是在系统的 hosts 文件中加入下面一行

```
220.181.174.162 translate.googleapis.com
```

translate.googleapis.com 是谷歌翻译的接口，前面的 IP 地址是翻译接口的地址。填入这一条就会使这个域名强制解析到此 IP，从而达到继续使用翻译功能的目的。
