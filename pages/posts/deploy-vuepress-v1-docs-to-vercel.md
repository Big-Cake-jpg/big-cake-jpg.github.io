---
title: 部署 VuePress v1 文档到 Vercel
date: 2022-07-10 08:43:54
updated: 2022-07-10 08:43:54
tags: 
  - Vercel
  - GitHub
  - VuePress
categories: 一点小技巧
---
## 前言

可能大家用 VuePress 做文档的已经厌烦了每天对着终端敲 `yarn docs:build` 了吧。

想用 CI 却苦于配置无从下手。

这里我来和大家分享一下，如何将 VuePress 文档部署到 Vercel 上。

<!-- more -->

<div class="danger">

> 本文仅适用于 VuePress v1 文档。关于 v2 文档，还请各位看官自行摸索。

</div>

## 步骤

### 注册 Vercel

不多说了，这是[注册链接](https://vercel.com/signup)，推荐使用 GitHub 账号进行 OAuth 登录。

### 创建项目

进入 Dashboard 以后，点击右上角的“New Project”新建一个项目；

选择你存放文档的仓库，点击“Import”，这里用 PCL 生存服的文档进行展示；

![导入仓库](https://cdn.cakeskin.tk/images/deploy-vuepress-v1-docs-to-vercel/Import-Repo.png)

<div class="info">

> 如果你要从一个组织账号部署，你需要先创建一个团队账号。

</div>

`FRAMEWORK PRESET` 请务必选择 Vue.js。

我们接下来来到 `BUILD AND OUTPUT SETTINGS` 页面，打开第二个开关，在旁边的文本框内填 `.vuepress/dist`（如果你的文档在子目录里存放比如 `docs` 文件夹，那么需要在前面加上这个文件夹的名字）。

其余的可以留着不填，如下图（请不要直接照抄）

![配置](https://cdn.cakeskin.tk/images/deploy-vuepress-v1-docs-to-vercel/Config.png)

点击“Deploy”按钮，然后等待部署。

如果页面上冒出了烟花，表示你的文档已经成功部署了。

### 配置项目

打开项目，点击 Settings，导航到 Git，将“Production Branch”设置为你存放文档工作区的分支。

需要注意的是，文档工作区的目录结构一般长这个样：

![文档目录结构](https://cdn.cakeskin.tk/images/deploy-vuepress-v1-docs-to-vercel/Branch.png)

设置好，点击“Save”，然后对仓库进行一次提交，更改就会自动部署到生产环境。

至此，我们所需要做的就全部完成了！