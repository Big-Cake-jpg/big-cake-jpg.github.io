---
layout: post
title: 国行 iPhone 12 强开 Apple 智能
date: 2024-11-10T13:00:00.000Z
updated: 2024-11-10T13:00:00.000Z
categories: 教程
tags:
  - Apple 智能
  - iOS
---

就，最近不是 Apple 智能很热门嘛，B 站到处都是强开教程，自己早就想看看效果了。但在当时我的设备已经升级到了新的 iOS 18.1 Beta 5，这个版本修复了 `sparserestore` 漏洞导致我无法使用 misakaX 了。

好在现在 misakaX 与 Nugget 都对新的 iOS 版本提供了有限支持，所以咱也可以在 iPhone 12 上强开 Apple 智能了！

<!-- more -->

:::danger 风险警告

不建议在主力机上操作，如果 MobileGestalt 配置不当或者操作出现意外，设备可能会 Bootloop 无限重启或者导致数据丢失！

在恢复原样之前不要使用爱思助手等第三方工具，否则会导致验机报告变红影响二手销售。

:::

## 准备

首先你需要准备这些东西：

- 一台电脑，Windows 或者 macOS 都可以，我用的是 Windows 11；
  
  - Windows 设备需要在 Microsoft Store 安装“Apple 设备”应用或者下载 Apple 官网版本的 iTunes。

- Python 运行环境（版本需要 >= 3.8）

- Nugget；
  
  - 之所以不用 misakaX 是因为支持新版本 iOS 的构建只有 macOS 版本，而 Nugget 率先提供了新版本 iOS 支持，并且完全开源、同时支持 Windows、macOS 和 Linux。

- 一根 USB 数据线，用来连接电脑（我不推荐 WiFi 连接，可能会出现一些问题）；

- 一台 iPhone，比如我这里是 iPhone 12；

- 一个非国区、欧盟区的 Apple 账户。

## 开整

### 更改设备设置

目前 Apple 智能的中文支持要等到 2025 年 4 月，因此我们需要将设备显示语言与 Siri 语言均改为 English (United States)。

使用准备好的外区 Apple 账户登录并关闭“查找”，否则 Nugget 无法工作。

### 下载 Nugget

我们需要打开 Nugget 的 [GitHub 仓库](https://github.com/leminlimez/Nugget)，在 Releases 中找到最新的构建版本下载下来。

![1731215183141.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/67303f536dc65.webp)

下载到的是已经预先编译好的程序本体，解压到一个地方就可以了。

### 获取设备的 MobileGestalt

在设备上安装“快捷指令”，然后在浏览器里打开[这个链接](https://www.icloud.com/shortcuts/d6f0a136ddda4714a80750512911c53b)，这会添加一个快捷指令到快捷指令中心。运行快捷指令，然后在设备上找个地方保存 MobileGestalt 文件，使用你喜欢的方式将它传输到电脑上。

传输到电脑上以后，复制一份到 Nugget 的目录下用来编辑，原来的文件保持原样不动以免出现问题。

### 强开 Apple 智能

将设备使用数据线与电脑连接，然后打开 Nugget。左上角会有一个设备列表可以选择，在里面找到你的设备后转到“Mobile Gestalt”，勾选“Disable Region Restrictions (ie. Shutter Sound)”。

![1731215987273.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/6730427694cbf.webp)

然后转到“Eligibility”，勾选“Enable Apple Intelligence (for Unsupported Devices)”与“Enable Eligibility File (test)”，并且把“Spoofed Device Model”更改为“iPhone17,2 (iPhone 16 Pro Max)”。

:::tip

下载 Apple 智能的模型需要设置“Spoofed Device Model”，这会导致面容 ID 暂时无法使用，我们需要之后把它改回来

:::

![1731216361750.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/673043eb8d957.webp)

选完以后，到”Apply“页面，选择你刚才复制的 MobileGestalt 文件，然后点击“Apply Changes”。不出意外的话，你的设备会自动重启。如果报了错，可以检查一下设备连接、看看 iOS 版本是否被 Nugget 支持。

重启后走一下网络设置，然后应该会进主屏幕。打开设置，不出意外的话应该能看到 Apple 智能的入口。按照正常流程加入等待队列等一段时间让它下模型就可以了。你可以考虑盯着点 iOS 的存储占用，等 Apple 智能的占用大小达到至少 3GB 就可以用一些基本的东西了。

![1731216807041.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/673045a967b74.webp)

### 恢复面容 ID

确保能正常使用 AI 以后，关掉 Apple 智能的开关，确保“Spoofed Device Model”为“None”以后点击“Apply Changes”应用更改。

:::warning 未测试

我在执行这一步的时候遇到了点问题，无法测试这样是否能够恢复面容 ID。

鉴于这是 Nugget 在程序里写明的提示，我把它放在这里了。

:::

## 效果展示

<div grid="~ cols-2" pb="4">

![1731218464269.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/67304c227da7c.webp)

![1731218474534.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/11/10/67304c39e12cb.webp)

</div>


