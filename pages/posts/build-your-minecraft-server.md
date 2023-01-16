---
title: 搭建一个属于你自己的 Minecraft 服务器
date: 2022-04-09 21:58:44
updated: 2022-04-09 21:58:44
tags: 
  - 服务器
categories: Minecraft
---
好的，又是一篇新的文章！其实网上的教程够多了，基本都能达到目标。

但是我要写一个简单的教程来取代它们（其实如果自己忘了也可以看看）

废话少说，让我们开始吧！

> 前排提示：本教程仅适用于 Minecraft Java 版，基岩版请等以后出。
> 
> 而且你首先得有初一的英语水平、一个正常的大脑、玩过一段时间的 Minecraft，以及一台能正常工作的电脑。

## 步骤

### 检查系统环境

开一个 Minecraft Java 版服务器，首当其冲的要求就是 Java 运行时。这个只要你玩过 Minecraft 就肯定会有。

其次，你的操作系统也需要与时俱进，最起码得是 Windows 8.1 或者较新的 Linux。

这些都是你在搭建服务端时需要注意的，当你看到以上所有的条件都满足以后，就可以开心地进入下一步了！

### 下载服务端核心

Minecraft 服务器都有一个极其核心的部分：服务端。

服务端承载 Minecraft 服务器与多人游戏的实现，是必不可少的。

现在让我们来下载服务端吧！这里使用 z0z0r4 提供的 ZMirror 服务端镜像下载服务。

> 地址：https://mcmirror.zclubserver.top 
>
> 赞助：https://pay.z0z0r4.top

打开上面的地址，我们可以看到一个这样的界面：

![屏幕截图 2022-04-09 223731.png](https://pic.dogimg.com/2022/04/09/62519a5b239ef.png)

其中：vanilla 是原版服务端，也就是 Mojang 写的，不能通过插件或 Mods 添加功能与玩法。这里选择它来做教程

点进去，在列表里找到你需要的版本即可。如：1.18.1。

点击一下你要的版本，在右上角找到下载按钮即可下载。

![屏幕截图 2022-04-10 083827.png](https://pic.dogimg.com/2022/04/10/6252272c18e31.png)

> 请下载后缀名为 `.jar` 的文件，不要下后缀为 `.jar.sha1` 的文件。

下载好以后，丢到你喜欢的位置。我这里是在桌面上新建一个文件夹，直接把下载好的核心丢进去即可。

![屏幕截图 2022-04-10 084116.png](https://pic.dogimg.com/2022/04/10/625227fd9e61a.png)

### 进行初步配置

我们双击一下服务端核心，稍等片刻，就会发现目录下多了很多文件。

![屏幕截图 2022-04-10 084402.png](https://pic.dogimg.com/2022/04/10/6252286ca844b.png)

现在打开 `eula.txt`，我们需要在这个文件中同意 Mojang 的 EULA 才能进行下一步配置。

> 建议您大致了解 Mojang EULA 协议

将 `false` 改为 `true`，保存文件。

![屏幕截图 2022-04-10 084631.png](https://pic.dogimg.com/2022/04/10/625229032851c.png)

然后再次双击服务端文件，过一段时间你应该会看到这个窗口：

![屏幕截图 2022-04-10 085328.png](https://pic.dogimg.com/2022/04/10/62522aa453614.png)

让我们关闭服务端。点击关闭按钮或者在控制台内输入 `stop` 都可以。

现在在目录里新建一个文本文档，在里面输入下面的参数：

```
java -Xmx1G -Xms1G -jar minecraft_server.1.18.1.jar -nogui
pause

# 如果你要使用自定义的 Java 版本

"你要用的 Java 的 java.exe 绝对路径" -Xmx1G -Xms1G -jar minecraft_server.1.18.1.jar -nogui
```

> `java` 是你要用的 Java 路径。如果电脑内安装了不同版本的 Java 则需要手动指定路径
>
> `-Xmx` 和 `-Xms` 字段是控制服务器所用内存的，根据你自己的需求来设置即可。Mojang 推荐最大值和最小值相同（即分配静态内存）

现在，你的文件夹内应该有这样的目录结构：

```
文件夹
|_ libraries
|_ logs
|_ versions
|_ world
|_ banned-ips.json
|_ banned-players.json
|_ eula.txt
|_ minecraft_server.1.18.1.jar
|_ ops.json
|_ server.properties
|_ start.bat
|_ usercache.json
|_ whitelist.json
```

打开 `server.properties` 文件，这个文件是服务端的配置文件，你可以在其中自定义玩家数量上限、正版验证、游戏模式、难度等等。具体请看 Minecraft Wiki。

![屏幕截图 2022-04-10 094206.png](https://pic.dogimg.com/2022/04/10/6252360d1b990.png)

> [Minecraft Wiki 有关服务端配置文件的介绍](https://minecraft.fandom.com/zh/wiki/Server.properties)

当你完成了该文件的编辑时，这个服务器就算是真正完成了。接下来你可以使用内网穿透工具让它可以被外部连接到，或者花点钱去租一个服务器也可以。

## 结语

到这里，这个教程就结束了。

你现在已经基本掌握了搭建服务器的步骤，接下来，去租一个机子托管你的服务器吧！不要总是做~~白嫖怪~~呢......？
