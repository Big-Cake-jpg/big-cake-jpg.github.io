---
layout: post
title: 2025 年，把一加 6T 作为主力机是什么体验？（上）
date: 2025-03-30 14:17:37
updated: 2025-03-30 14:17:37
tags:
  - 一加
categories: 报告
cover: https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/670606d8a9e57b8f3c83f3a1fcf42f12.webp
---

:::tip

这篇文章其实是最先在我新注册的微信公众号里发出来的，希望大家能关注一下公众号支持一下我（）

![](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/b4a030bfa83ecccbbafb0b2636fd3919.webp)

:::

一加 6T，代号 `fajita`，首发于 2018 年。

将近七年时间过去了，在正常人眼里，它也许已经无法胜任日常生活的需要了。

但只要想，什么都能用来当主力设备，甚至是一台 iPhone 6 Plus。

现在，我们就来让它做段时间的主力设备，看看它是不是“老当益壮”，继续承担现代社会的日常陪伴吧。

<!-- more -->

---

## 前情提要

简单说一下现在的情况，我手中的这台 6T 是去年十一月从一位朋友手中花费 200 元购入的。

他比较喜欢折腾，于是在到我的手中之前，他给这台设备刷了基于 Android 14 的 crDroid 10。

配置方面，这台机器的处理器是骁龙 845，8+128 的配置让这台设备还有余力同时运行很多 App。

crDroid 一加 6T 维护者 @Terminator_J 也为它适配了基于 Android 15 的 crDroid 11，我手上的这台现在就是刷过 A15 的。

![设备的 Android 版本页面](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/637098f05d24d15369e96844e685261c.webp)

那么接下来，就是具体的日常使用体验了。

---

## 日常使用

### Root

一加 6T 的内核版本是 4.9.337，目前所有的 Root 解决方案如下：

- Magisk，也是最经典的一种了；
- KernelSU v0.9.5；
  - 但是 KernelSU 在 1.0 版本之后就不再支持非 GKI 内核了，因此一些操作是没法触发的。
- KernelSU Next；
  - 维护者称会一直保留非 GKI 内核支持，但会不会砍掉就看天意了。
  - 以及之前 KSUNext 维护者的一些逆天发言，这个不做评价，看乐子就够了。
- APatch，目前 Bug 似乎还很多。
  - 至少我在还没刷 A15 之前是死活没法 Root 成功，到 GitHub 搜了一下相关的 Issue，感觉可能是 ROM 的原因。

### 聊天

说到聊天，那就必须要提到国民级 App ~~小而美~~ 微信了。

因为我同时刷入了 GApps，因此绝大多数应用都是优先从 Google Play 商店下载的，微信也不例外。

Play 版本的微信有一个优点是可以使用 FCM 收取消息通知，不过稳定性可能不是很好。

为了缓解这个问题，我使用了 `fcmfix` 这个 Xposed 模块，它可以在收到 FCM 推送时自动拉起 App 以缓解因为 App 不在后台而收不到 FCM 推送的问题。

我的微信主要用来和同学、家人联系，以及~~打某个滚筒洗衣机街机~~。

![awmc](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/8b748a1dcea07e87fb041057cbc97e46.webp)

> 唉，舞萌吃。

在这台手机上，微信的冷启动速度几乎和现在的新机没有差异，甚至比我 iPhone 12 上的微信冷启动速度还要快。小程序的体验也都还可以，但相比主界面而言启动时会有一点卡顿。

### QQ

我的 QQ 还停留在 9.0.75 版本，不过就算更新到了新版本，冷启动速度也很快。

平常用得多的就是 QQ 了，除了相机启动速度很慢以外，QQ 其它的聊天场景这台 6T 都能胜任。

## 电子支付

我使用的是支付宝与微信支付，支付宝也是从 Google Play 安装的。

一加设备解锁后会导致微信的指纹支付无法使用，这可能算是最影响日常支付体验的一点了。相比之下支付宝就什么问题也没有。

云闪付实际上已经变成了我查银行卡余额的工具了。我记得在最初还在 Android 14 的时候，我的云闪付是没法使用系统指纹的，不知为何现在在 Android 15 上这个问题又消失了。总之就是我也开了云闪付的指纹支付。

我在太原居住，平常出行严重依赖公共交通。由于类原生没有什么 NFC 交通卡的解决方案，我选择扫支付宝中的乘车二维码。这点上太原地铁和太原公交的乘车体验还是很好的。

便利店买东西，有支付宝碰一碰的话我会优先用支付宝，体验上还是不错的。

## 音视频

### 音乐

我日常使用网易云音乐与 Apple Music。

网易云冷启动有时候会显得很卡，整体体验还算可以。

Apple Music 基本已经成了我重度使用的音乐 App，因为 Apple 的动效不知道把网易云甩了几条街了。感觉用起来还挺不错的，唯一可惜的地方在于 6T 的扬声器和 iPhone 比起来会差很多（虽然他们本就不是一个时代的东西）。

![](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/62d7391b69bfb32b3dccc96575b06981.webp)

![](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/02cf9ec0e9f40d17df2329aa88a82195.webp)

### 视频

我用得多的是 B 站和抖音。B 站是 Play 商店里的国际版，界面干净简洁，而且支持 FCM 推送，不过推送语言是繁体中文而且好像没有设置项。

抖音……酷安下的，我是没想到居然意外的流畅。按照我以前的印象抖音在我身边的很多设备上都显得卡卡的。

## 摄影

我拍照技术并不好，不过这里还是得简单说说。

一加的 crDroid 包带了 OxygenOS 中的一加相机和一加相册，这是很好的一个点，因为一加相机在 6T 上可以拍摄 4K 60FPS 的视频，而 Google Camera 则不太行。

我把 LineageOS 自带的相机“Aperture”停用了（你没看错，是 LineageOS，crDroid 是它的一个分支版本），因为有了一加相机也就不需要它了。

放点图吧。

![awmc](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/0007b371a6519f4f17f3fed9a2763486.webp)

![“外老就在哇”](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/9310e6d0dead3ea443e9b113673c45f1.webp)

![地铁](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/4fe45ed04669979eeaa2bf7364631b05.webp)

## GAMING！！！

我也在这台手机上下了游戏玩，不过也就一两个。

### 崩坏：星穹铁道

> 什么时候星穹铁道都能拿来测评老设备了？

凌晨的时候，我拿这台 6T 打开了星穹铁道，清了点开拓力并且打了一次差分宇宙。

![我使用的画质配置](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/1a709242c99e0c63db87d5f045050fc8.webp)

![只是垫几抽结果抽出万敌了，这下角色池六连没歪了](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/b948b6888bd17c1ba613eb425a59529a.webp)

![刷知更鸟材料时开大的云璃](https://objects.lihaoyu.cn/bigcake-blog-images/2025/03/30/f4b7782e4c10e19c703ef8a1110cb167.webp)

额，怎么说呢，差不多稳定 30 帧以上吧，但总的来说 845 的游戏体验还算凑合。

---

就目前而言，对我来说刷了 Android 15 的一加 6T 完全能满足我的日常使用需求。不过鉴于只用了大约一天时间，所以之后还会再用一段时间，到时候会再发一篇文章出来聊聊。

你的设备现在还能满足你的使用需求吗？来聊聊吧。
