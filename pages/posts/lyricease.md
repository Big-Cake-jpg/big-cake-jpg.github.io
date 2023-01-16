---
title: 诈尸？—— 第三方网易云音乐客户端 LyricEase
date: 2023-01-08 13:07:43
updated: 2023-01-08 13:07:43
cover: https://r2.cakeskin.tk/posts/lyricease/cover.webp
tags:
  - 分享
  - 软件
  - 网易云音乐
categories:
  - 大蛋糕的安利
---

以前我提到过，我很喜欢 UWP 应用，因为大多数 UWP 的界面都能与 Windows 完美融合在一起。

前段时间因为网易云音乐官方的客户端不合我意，以及它的资源占用，我便尝试寻找一个第三方的网易云音乐客户端。

正好在 B 站上看到了 LyricEase 复活的视频，以前也对 LyricEase 有所耳闻，便决定拿来用。

用了少说也有半个月了，是时候宣传出去了。

<!-- more -->

## 安装

### 更改 Windows 设置

由于现在的 LyricEase 不再使用 Microsoft Store 进行分发，我们需要通过微软的 Visual Studio App Center 获取 LyricEase 的安装包。这是[下载链接](https://install.appcenter.ms/users/brandonw3612/apps/lyricease/distribution_groups/public)。由于是微软服务，速度可能极为缓慢，此时可以尝试使用 Watt Toolkit（Steam++）。

在它下载的时候，我们可以趁此机会将 Windows 的开发者模式启用，否则 LyricEase 将无法安装。

打开 Windows 设置，导航到“隐私和安全性”下的“开发者选项”页面，启用“开发人员模式”。

![](https://cdn.cakeskin.tk/images/2023/01/20230108132803.png)

### 安装证书与应用

当 LyricEase 下载好以后解压安装包到一个文件夹内，然后你会得到这样的一个文件结构：

![](https://cdn.cakeskin.tk/images/2023/01/20230108133230.png)

双击证书，点击“安装证书”，然后选择存储位置为“本地计算机”，将证书安装到“受信任人”类别下，然后确认导入。

导入完成以后，在 Microsoft Store 内搜索“应用安装程序”并安装，完成以后双击 LyricEase 的 Appx 安装包。

然后就会弹出如下窗口：

![](https://cdn.cakeskin.tk/images/2023/01/20230108133703.png)_我这里已经安装过了，因此是这个样子_

点击窗口内的“安装”按钮，然后等待一会儿。安装完成后，开始菜单内就会出现 LyricEase。

点击应用安装程序窗口内的“启动”按钮即可打开 LyricEase。

### 登录账号

LyricEase 支持使用账密登录与扫码登录，但是它是强制登录的。

不多说。登录卡片的右上角小齿轮内可以选择是否使用代理。

### 更新

现在 LyricEase 的应用内更新是通过 AppCenter 实现的。

打开“设置”，将页面滚动到最底部，点击“检查更新”即可。现在也支持下载内部预览版本以及按处理器架构下载。

![](https://cdn.cakeskin.tk/images/2023/01/20230108135520.png)

### 桌面歌词

只有一个 LyricEase 是无法实现歌词桌面常驻的。我们需要从 Microsoft Store 下载一个名叫“热词”的应用。

安装完成以后，打开 LyricEase 设置中的“启动时自动唤醒热词”开关。

之后，每一次启动 LyricEase，热词也会同时启动。当 LyricEase 播放音乐时，热词会自动获取当前曲目的歌词并显示在桌面上，效果如下：

![](https://cdn.cakeskin.tk/images/2023/01/20230108135857.png)

## 效果演示

<div class="warning">

> 多图预警！

</div>

![](https://cdn.cakeskin.tk/images/2023/01/20230108140741.png)

![](https://cdn.cakeskin.tk/images/2023/01/20230108140804.png)

![](https://cdn.cakeskin.tk/images/2023/01/20230108141018.png)

![](https://cdn.cakeskin.tk/images/2023/01/20230108141116.png)

![](https://cdn.cakeskin.tk/images/2023/01/20230108141150.png)

![](https://cdn.cakeskin.tk/images/2023/01/20230108141212.png)

![](https://cdn.cakeskin.tk/images/2023/01/20230108141340.png)

![](https://cdn.cakeskin.tk/images/2023/01/20230108141421.png)

<div class="info">

> 展示图片中的《果汁分你一半》歌曲可以在 B 站找到两位~~可爱正太~~翻唱作者合作制作的 PV，这里放个链接：https://www.bilibili.com/video/BV18a411d7bY 。图片仅作展示用途。

</div>