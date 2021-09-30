---
title: Cake Launcher 开发日志
date: 2021-09-30 16:49:20
tags: 
  - 启动器
  - C#
categories:
  - Cake Launcher
---
![GitHub pull requests](https://img.shields.io/github/issues-pr/Big-Cake-jpg/Cake-Launcher?label=Pull%20Requests&style=flat-square)![GitHub issues](https://img.shields.io/github/issues/Big-Cake-jpg/Cake-Launcher?label=Issues&style=flat-square)![GitHub](https://img.shields.io/github/license/Big-Cake-jpg/Cake-Launcher?label=License&style=flat-square)![GitHub repo size](https://img.shields.io/github/repo-size/Big-Cake-jpg/Cake-Launcher?label=Repository%20Size&style=flat-square)![GitHub contributors](https://img.shields.io/github/contributors/Big-Cake-jpg/Cake-Launcher?label=Contributors&style=flat-square)![GitHub last commit](https://img.shields.io/github/last-commit/Big-Cake-jpg/Cake-Launcher?label=Last%20commit&style=flat-square)![GitHub Author](https://img.shields.io/badge/Author-Big__Cake-blue?style=flat-square)

[Cake Launcher](https://github.com/Big-Cake-jpg/Cake-Launcher) 是我为自己的 Minecraft 服务器开发的一个启动器 ~~（蛋糕启动器（误））~~

<!-- more -->

## 2021-09-30 | 微软登录

微软登录基本完成，目前启动器使用了两个启动核心，分别是 [KMCCC](https://github.com/MineStudio/KMCCC) 和 [SquareMinecraftLauncherCore](https://github.com/baibao132/SquareMinecraftLauncherCore)

前者用于离线登录与 Mojang 正版登录，后者用于微软正版登录

>感谢 B 站 UP 主 [小叶君](https://space.bilibili.com/495713706) 的教程与微软登录dll

![Cake-Launcher](https://cdn.jsdelivr.net/gh/Big-Cake-jpg/Image_For_My_Blog/launcher-develop/cake-launcher.png)

但现在需要解决一个新的问题：如果使用微软登录启动游戏，启动器将无法继续运行后续代码

![problem](https://cdn.jsdelivr.net/gh/Big-Cake-jpg/Image_For_My_Blog/launcher-develop/problem.png)

请等待后续更新……

>如果你想帮我修复这个问题，或者为启动器添砖加瓦，你可以前往 [GitHub 仓库](https://github.com/Big-Cake-jpg/Cake-Launcher)

