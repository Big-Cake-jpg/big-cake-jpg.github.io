---
title: 如何诊断 Minecraft Java 版客户端中的错误
date: 2022-04-08 07:45:18
updated: 2022-04-08 07:45:18
tags: 
  - 问题诊断
  - Mods
categories:
  - Minecraft
---
## 前言

妈耶，终于修好 Hexo 报 YAMLException 的问题了，上次更新已经是 5 个月前了呢！

这段时间没更新，主要就是 Hexo 的锅。

> 顺带一提，又回归到网课时期了（我这边有疫情）

由于 ~~Mojang~~ Bugjump 的传统艺能，Minecraft Java 版通常会因为各种玄幻的原因崩溃，这篇文章将会带着你判断你的 Minecraft 出了什么问题，以及可能的修复方法。

<!-- more -->

## 步骤

### 选择正确的 Java 版本

请先选择正确的 Java 版本。

1.17.x 需要 Java 16，1.18 + 需要 Java 17。1.16.5 及以下需要 Java 8

如果选择了错误的 Java，那么不管怎么搞，游戏都始终会崩溃。

> 通常情况下，启动器会自动根据选择的版本帮你选择 Java 运行时（如 [BakaXL](https;//www.bakaxl.com) 和 PCL2）

当你的游戏无法启动时，取决于你使用的启动器（如 [BakaXL](https://www.bakaxl.com) ），启动器会为你分析崩溃原因并为你提供一个打包好的错误报告与日志。如果你比较懒，可以直接将这个压缩包发到 QQ 群等处询问他人。~~（但这就和这篇文章的主旨脱离了啊喂）~~

> 推荐阅读：[提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)

理想情况下，上面的方法可帮你解决大部分问题。但是俗话说：“理想很丰满，现实很骨感”，有些问题连启动器都没办法告诉你为啥。这就需要我们自己动手了。

### 认识 Minecraft 的目录结构

首先，请打开你存放游戏的文件夹。我在这里默认你的游戏已经运行和崩溃了至少一次。

如果你没有开启版本隔离，那么这个文件夹应该至少具备以下目录结构：

```
文件夹
|_ .minecraft
|     |_ assets
|     |_ libraries
|     |_ crash-reports
|     |_ logs
|     |_ versions
|     |   |_ 你的游戏版本
|     |       |_ 游戏版本.jar
|     |       |_ 游戏版本.json
|     |_ launcher_profiles.json       
|_ 启动器（ PCL2.exe，BakaXL.exe 等）
```

如果你开启了版本隔离，那么这个文件夹的目录结构至少应该是这样的：

```
文件夹
|_ .minecraft
|     |_ assets
|     |_ libraries
|     |_ versions
|     |   |_ 你的游戏版本
|     |       |_ crash-reports
|     |       |_ logs
|     |       |_ 游戏版本.jar
|     |       |_ 游戏版本.json
|     |_ launcher_profiles.json
|_ 启动器（ PCL2.exe，BakaXL.exe 等）
```

然后，按照上方的目录结构，找到 `crash-reports` 和 `logs` 文件夹。前者存放着游戏崩溃时自动生成的崩溃报告，后者存放游戏运行日志

然后，在资源管理器中按下 “修改日期” 按钮，你就会看到最新的日志 `latest.log` 。

![latest-log](https://pic.dogimg.com/2022/04/08/624fbdc0b4a63.png)

> `crash-reports` 文件夹同理。

我们暂且先不去理 `latest.log` 。现在让我们打开最新的 `crash-report` 文件，打开以后你就会看到大片的堆栈跟踪以及看不懂的错误类型。

> 文件名内标有 `server` 字样的一般和游戏内置的服务端有关，你可以不用理会。一般崩溃后产生的 `crash-report` 文件都是带有 `client` 字样的
>
>![crash-report](https://pic.dogimg.com/2022/04/08/624fbf4329db5.png)

### 寻找错误

这一份崩溃报告是安装了 Forge 和 VanillaFix 后的一次崩溃生成的。我们可以看到这里的错误类型是 `Initializing game` ，意思是加载游戏（废话）。堆栈跟踪最顶部的一行告诉了我们错误原因是 `ngtlib` 这个依赖 Mod 加载 `jp.ngt.ngtlib.NGTCore` 这个 Class 失败了。

![屏幕截图 2022-04-08 125741.png](https://pic.dogimg.com/2022/04/08/624fc0dfd9e74.png)

这段文字告诉我们导致错误的原因是 `ClassNotFoundException` 即 “找不到类”。下方的 Sha1 值验证不通过和后方跟着的人类可读报错告诉我们这个 Mod 和依赖它的 `RealTrainMod` 的版本不对应导致崩溃

往下翻，我们可以看到这样的布局：

![屏幕截图 2022-04-08 130559.png](https://pic.dogimg.com/2022/04/08/624fc2d1a664a.png)

上半部分记录了你的系统、游戏版本、Java 和 JVM 各自的版本、JVM 参数、内存等；下半部分则是你使用的 Forge、OptiFine（如果你装了）的版本以及下方 L、C、H、I、J、A、D、E 八个字符分别对应的意思以及你安装的 Mods。一般通过这张表即可得出出问题的 Mod 是哪个。

以此类推即可。

如果你的 Minecraft 文件夹内出现了文件名类似 `hs-err-pidxxxxxxxx.mdmp` 之类的文件的话，可能是你分配给 Minecraft 的内存过少或者你的 Java 有问题。

如果启动时出现了一个窗口，内部带有如下链接：https://aka.ms/mcdriver ，则说明你的显卡驱动出现了一些问题（或者你压根没有显卡——通常发生在你尝试在租来的 Windows 服务器上）。



### 解决问题

出问题的 Mod，需要更换或删除。

内存不足，需要多分点内存，或者~~滚回功率，坐和放宽~~去玩老版本

显卡有问题，可以考虑更新显卡驱动或者重买一个电脑（？

Java / JVM 的问题，可以尝试重新安装一次 Java 或者多给你的 Minecraft 分配点内存。毕竟：

![Java eats memories](https://pic.dogimg.com/2022/05/02/626f50ce7ac63.jpg)