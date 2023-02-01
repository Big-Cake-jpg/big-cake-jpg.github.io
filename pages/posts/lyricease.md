---
title: 诈尸？—— 第三方网易云音乐客户端 LyricEase
date: 2023-01-08 13:07:43
updated: 2023-02-01 11:05:20
cover: https://img-blog.csdnimg.cn/211edf7c843049c5a0a6121f341d368a.png
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

![](https://img-blog.csdnimg.cn/6cca272e9ef3403abb3d0a1177b95ef9.png)

### 安装证书与应用

当 LyricEase 下载好以后解压安装包到一个文件夹内，然后你会得到这样的一个文件结构：

![](https://img-blog.csdnimg.cn/f4182d026987484289cf0abba6a52902.png)

右键 `Install.ps1` 文件，选择“使用 PowerShell 运行”，证书与应用就会自动安装。期间可能需要确认一下操作，可以直接选择“全部同意”。

### 登录账号

LyricEase 支持使用账密登录与扫码登录，但是它是强制登录的。

不多说。登录卡片的右上角小齿轮内可以选择是否使用代理。

### 更新

现在 LyricEase 的应用内更新是通过 AppCenter 实现的。

打开“设置”，将页面滚动到最底部，点击“检查更新”即可。现在也支持下载内部预览版本以及按处理器架构下载。

![](https://img-blog.csdnimg.cn/2f0d46afb9394088a913bcf24ce548c7.png)

### 桌面歌词

只有一个 LyricEase 是无法实现歌词桌面常驻的。我们需要从 Microsoft Store 下载一个名叫“热词”的应用。

安装完成以后，打开 LyricEase 设置中的“启动时自动唤醒热词”开关。

之后，每一次启动 LyricEase，热词也会同时启动。当 LyricEase 播放音乐时，热词会自动获取当前曲目的歌词并显示在桌面上，效果如下：

![](https://img-blog.csdnimg.cn/a128dbf1388949b8aa938a78f4545545.png)

## 效果演示

<div class="warning">

> 多图预警！

</div>

![](https://img-blog.csdnimg.cn/c3c0c243b37b4f16b73c653ff6cfce42.png)

![](https://img-blog.csdnimg.cn/aad4f3ed4fa945719eca7de3667db5ef.png)

![](https://img-blog.csdnimg.cn/18dc55bc97bf4bfe961a6efa0d725ead.png)

![](https://img-blog.csdnimg.cn/e5ad5c20da9342be851fb812912bf38a.png)

![](https://img-blog.csdnimg.cn/44b3084af864415793f8b0e8df79de66.png)

![](https://img-blog.csdnimg.cn/0b325b9731a5498a9078dd6acc3094d9.png)

![](https://img-blog.csdnimg.cn/cd53d46078464775a73b44daf0517ba4.png)

![](https://img-blog.csdnimg.cn/9a67f3c6f6f9421b931a8d200eb3f50f.png)

<div class="info">

> 展示图片中的《果汁分你一半》歌曲可以在 B 站找到两位~~可爱正太~~翻唱作者合作制作的 PV，这里放个链接：https://www.bilibili.com/video/BV18a411d7bY 。图片仅作展示用途。

</div>