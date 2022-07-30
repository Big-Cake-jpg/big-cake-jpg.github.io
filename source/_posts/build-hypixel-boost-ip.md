---
title: 搭建 Hypixel 加速 IP
date: 2022-07-13 16:48:21
updated: 2022-07-13 16:48:21
tags:
  - Hypixel
  - 服务器
categories: Minecraft
---
## 前言

其实在这之前我一直用的是网上公开的加速 IP，比如 NoCheatPlus 团队的公益加速 IP。

然而昨天这个加速 IP 出了点问题，Minecraft 连不上去了。

我就想，要不然自己搭建一个算了，稳定还省心呢。

于是这篇文章应运而生。

<!-- more -->

## 步骤

### 选购合适的服务器

想要搭建加速 IP，我们首先需要选购一个合适的服务器。

当然，这年头云服务器提供商也不少了，阿里云、腾讯云、UCloud、华为云等等。

你可以根据自己的喜好，到对应的服务商处购买服务器。

需要注意的是，服务器需要位于国外并且有良好的 CN2 线路。

华南地区可以选择位于香港的服务器，其它地区可以选择日本、美国的服务器。

服务器系统请选 CentOS 系，宽带建议 5 Mbps。

买下服务器后，你会得到一个 IP 地址和一个密码。

接下来我们要确认电脑内是否有 SSH 工具。

如果你是 Windows 10/11 用户，那么电脑内已经自带了 SSH 工具。如果没有，请去“打开或关闭 Windows 功能”内手动启用。

其它系统可以选择安装 Xshell、FinalShell、PuTTY 之类的 SSH 工具。

### 连接服务器

接下来，用你拿到手的 IP 和密码进行连接吧。

这里假设我的服务器 IP 是 192.173.261.222，那么我需要在终端内输入：

```bash
ssh root@192.173.261.222
# 第一次连接的话会显示一个未知主机的警告，输入 yes 确认
root@192.173.261.222's password: _ # 输入你的密码
# 如果你发现屏幕没反应，不要慌，其实密码已经输进去了
```

然后我们就能连接上我们的服务器了。

![SSH 界面](https://cdn.cakeskin.tk/images/build-hypixel-boost-ip/SSH.png)

### 设置流量转发

接下来我们需要一个流量转发脚本。这个就看大家喜好了，只要是自己常用的就行，这里使用 Brook 作为示例。

```bash
cd /
mkdir brook
cd brook
wget https://cdn.cakeskin.tk/brook.sh
bash brook.sh
```

然后输入 1 安装 Brook，等待安装完成后再次输入 `bash brook.sh`，按顺序分别输入 7 和 1。

然后你就会看到这样的页面

![Brook](https://cdn.cakeskin.tk/images/build-hypixel-boost-ip/Brook.png)

按照其指引进行设置。本地监听端口填写 25565；被监听 IP 填写 `mc.hypixel.net` 解析出的任意 IP；被监听端口填写 25565.

![Ping](https://cdn.cakeskin.tk/images/build-hypixel-boost-ip/Ping.png)_红圈圈住的即是 IP_

全部填写完毕后，输入 Y 确认启用转发。

### 填写 Hosts

但这还没完。如果你尝试直接使用 IP 地址进入 Hypixel，会收到一个“非官方的 IP 地址”，叫你使用 Hypixel 提供的连接地址进行游玩。

可笑的是，这个检测很容易破解，它只是在检测你连接用的域名是不是属于 Hypixel 而已。

所以，我们以管理员模式打开记事本或任意一个文本编辑器，然后打开文件资源管理器，在上方的地址栏内输入：

```
C:\Windows\System32\drivers\etc\
# 出问题的话，可以试试把 Windows 换成 WINDOWS
```

找到名为 `hosts` 的没有后缀名的文件，用刚才打开的文本编辑器进行编辑，加入下面这行：

```
xxx.xxx.xxx.xxx mc.hypixel.net
# 如果你想保持 mc.hypixel.net 原有的解析，只需要把 mc 换成任意字符串就行
# xxx.xxx.xxx.xxx 替换为你自己的服务器 IP 地址
```

保存文件。

现在打开 Minecraft，输入你刚才在 Hosts 里填的域名，然后尝试连接一下？