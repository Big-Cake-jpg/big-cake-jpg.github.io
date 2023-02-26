---
title: 诈尸？—— 第三方网易云音乐客户端 LyricEase
date: 2023-01-08 13:07:43
updated: 2023-02-01 11:05:20
cover: https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/48cf630277f3e043e442db041c43adc6_3211563726773357981.webp
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

打开 Windows 设置，导航到“隐私和安全性”下的“开发者选项”页面，启用“开发人员模式”，并启用下方“PowerShell”卡片内的开关。

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/256f5c96860c023582f49a0eedab7495_9013535910728125833.webp)

### 安装证书与应用

当 LyricEase 下载好以后解压安装包到一个文件夹内，然后你会得到这样的一个文件结构：

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/aad799ddbf9e7197a17ada58e74226ee_154399002653709367.webp)

右键 `Install.ps1` 文件，选择“使用 PowerShell 运行”，证书与应用就会自动安装。期间可能需要确认一下操作，可以直接选择“全部同意”。

### 登录账号

LyricEase 支持使用账密登录与扫码登录，但是它是强制登录的。

不多说。登录卡片的右上角小齿轮内可以选择是否使用代理。

### 更新

现在 LyricEase 的应用内更新是通过 AppCenter 实现的。

打开“设置”，将页面滚动到最底部，点击“检查更新”即可。现在也支持下载内部预览版本以及按处理器架构下载。

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/d1a873ee56518ebce0a2a4c8a2474e96_7854958118733220003.webp)

### 桌面歌词

只有一个 LyricEase 是无法实现歌词桌面常驻的。我们需要从 Microsoft Store 下载一个名叫“热词”的应用。

安装完成以后，打开 LyricEase 设置中的“启动时自动唤醒热词”开关。

之后，每一次启动 LyricEase，热词也会同时启动。当 LyricEase 播放音乐时，热词会自动获取当前曲目的歌词并显示在桌面上，效果如下：

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/77a67578ced1a66a99d5c4bba7c22cba_292095534601372446.webp)

## 效果演示

<div class="warning">

> 多图预警！

</div>

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/c14c83233edd34af1f1e41a13030ed69_394109266886750307.webp)

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/ed38d3b8002645d8612d0cebe22e3052_2337541672433967445.webp)

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/29b5762b497e87cf851aa3dd21d73c20_3972968517881237330.webp)

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/7ccc078e4e54a688c97685c6bddb2a87_3991696644480684477.webp)

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/b6758d4c7086f9b8fa0dfffe47587656_590117347322240111.webp)

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/6afa0555999c613377af94012a507e82_2089319120000559523.webp)

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/717bd041f9e8c0a151fb048aed85fa40_3039260496609175468.webp)

![](https://upload-bbs.miyoushe.com/upload/2023/02/26/283684029/57a4f631b84a7dbdf9b81eafee5a5fec_2596380417817259778.webp)

<div class="info">

> 展示图片中的《果汁分你一半》歌曲可以在 B 站找到两位~~可爱正太~~翻唱作者合作制作的 PV，这里放个链接：https://www.bilibili.com/video/BV18a411d7bY 。图片仅作展示用途。

</div>