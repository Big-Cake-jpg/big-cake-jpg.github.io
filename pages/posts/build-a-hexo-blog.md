---
title: 手把手教你如何搭建属于自己的 Hexo 博客
date: 2021-12-04 16:45:10
updated: 2021-12-04 16:45:10
tags:
  - GitHub
  - Hexo
  - 博客
categories:
  - 大蛋糕的安利
---

> 写给一个想要拥有自己的博客，却没有资金的小白和小学时的自己

## 前言

虽然，独立博客的时代已经过去，越来越多的人们开始在大平台上发布自己的文章

虽然，这些平台的流量能够为这些博主们创造收益

但是，拥有一个自己的博客，意味着它不仅属于自己，而且需要自己一步步为它添砖加瓦

比如文章的语言、界面的布局、功能多少、搜索引擎收录，都需要自己一点点完善

最后，看到自己的网站一步步走到现在，内心也会有一种自豪与欣慰的感觉

希望看到这篇文章的所有人，不管是学生还是其它人，都能拥有一个完全属于自己的博客，并且用心去建设其中的内容

> 类似于此处的引用一般会是一些注意事项，在阅读前记得多注意一些

### 会提到的一些东西

- Hexo
- 静态博客
- Serverless（无服务器）
- GitHub Pages
- Hexo 主题

## 步骤

### 安装 Node.js

> 啥是 Node.js ？
> 
> Node.js 是一个基于Chrome V8引擎的 JavaScript 运行环境，使用了一个事件驱动、非阻塞式 I/O 模型，让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为与 PHP、Python、Perl、Ruby 等服务端语言平起平坐的脚本语言
> *—— 百度百科*

上边的这一个引用你可以忽略，看正文部分即可

首先，前往 [Node.js 官网](https://nodejs.org/zh-cn/) 下载安装包

选择**长期维护版**下载。如果你选择最新尝鲜版也无伤大雅，只是你有可能会遇到一些 Bug

如果你是 Windows 系统，下载下来的安装包后缀应为 `.msi`

> macOS 下载 `.pkg` 后缀
> 
> Linux 标签页右方小叉

打开下载下来的安装程序，一路回车（开始的时候需要同意协议）

等待安装程序安装完成后，打开命令行或者终端，输入 `node`

如果返回的内容与你安装的版本一致那么就代表安装成功了

后续操作都会在终端进行输入

> Node.js 安装成功以后默认会随附 `npm` 包管理器，会在之后用到
>
> 它的全称是 `Node Package Manager` ，你可以理解成手机上的应用商店

国内使用 npm 会很慢，你可以考虑切换为 `taobao` 镜像源

```
npm config set registry https://registry.npmmirror.com
```

你可以在安装完 Node.js 后安装 [yarn](https://www.yarnpkg.com/zh-Hans) 。Facebook 出品，比 npm 更快速的包管理器

```
npm install -g yarn
```

> [npm & yarn 常用包与命令](https://www.yuque.com/yunyoujun/notes/npm-and-yarn#nrm)

### Git 和 GitHub

#### 安装 Git

> Visual Studio Code ，简称 VS Code
>
> 目前最强大、最易用的编辑器，轻量、快速（~~宇宙第一编辑器~~）
> 
> 但它不是 VS ， VS 指的是 Visual Studio ，是集成开发环境（ IDE ）（~~小白易读：开发软件用的~~）这玩意儿体积要比 VS Code 大一个量级

（~~微软大法好~~）

先安装 [VS Code](https://code.visualstudio.com)，这样可以在安装 Git 时设置 VS Code 为默认编辑器

Windows 10 / 11 用户可在微软商店（新版）下载

>Git 是一个开源的分布式版本控制系统，由 Linus Torvalds（同时也是 Linux 的作者）为了管理 Linux 开发而开发。
>
>简而言之，是一个版本管理工具。譬如设计师设计好了第三版的海报，客户却说还是要第一版吧，这时便可以通过 Git 快速回退到最初的版本。
>
>你只需要把每次更改的状态（Git 会自动进行检测，你只要掌握基础的几条命令就可以了）告诉 Git，而不需要每个版本都保存一份压缩包，既方便也能大大节约空间。

下载 [Git](https://git-scm.com) 并安装，速度太慢的话可以试试国内的软件分发网站（注意要找大厂如腾讯，千万不要选高速下载之类的东西）

#### 注册 GitHub

这部分你可以等到在自己电脑上测试完成后，打算部署到线上的时候再翻回来看

> 从字面看，GitHub 便与 Git 有着密不可分的关系。`Git` 在必应翻译中是~~蠢货~~的意思，而 `Hub` 则为枢纽
> 
> 所以 GitHub 便是 ~~“蠢货枢纽” 的意思（大雾（划掉））~~
> 
> GitHub 是全球最大的开源项目与代码托管网站，也是众多开发者交流的平台，同时也是全球最大的[~~同性交友网站~~](https://github.com/komeiji-satori/Dress)
> 
> 而其代码托管本身的实现正是基于上边的 Git

注册 [GitHub](https://github.com) 账号（虽然全英文无翻译，但是并不难理解，只需记住最常用的选项即可，而且[官方文档](https://docs.github.com)有中文翻译）

注册时的英文 ID 将会成为你可以使用的免费域名前缀（比如我的 GitHub ID 是 Big-Cake-jpg ，那么我可以使用的免费域名就是 big-cake-jpg.github.io ）

> 为啥是这个没中文还天天打不开的东西？
> 
> 对于平民来说，第一次搭建网站时也许手头并没有钱去买服务器和域名
> 
> 而 GitHub 则提供了 [GitHub Pages](https://pages.github.com) 这一免费服务
> 
> 用户们可以利用这一服务部署静态站点

点右上角的 `+` => `New repository` 或者左侧边栏里的绿色按钮新建一个仓库

![create-repo](https://jsd.lihaoyu.cn/gh/Big-Cake-jpg/Image_For_My_Blog/build-a-hexo-blog/create-repo.png)_创建仓库的页面。我这里因为有同名仓库所以无法创建_

仓库名称务必像上图中 `用户名.github.io` 一样，用户名为英文，大小写可以不区分

> 为啥子必须要用这个仓库名啊……
> 
> 如果你没有自备的域名，这样做可以让 GitHub Pages 将其作为你的专属域名。当然，如果你有自己的域名，可以绑定上去

点击 `Create repository`

### 安装 Hexo

[Hexo](https://hexo.io)

- GitHub：<https://github.com/hexojs/hexo>
- [官方文档](https://hexo.io/zh-cn/docs/index.html) 有较高的理解能力（~~语文 90 分以上~~）也可以看官方文档（~~反正我看不懂~~)

> Hexo 是一个快速、简介、强大的博客框架，基于 Node.js，同样托管与 GitHub 上，拥有良好的生态。你可以用它快速生成静态页面，可以使用他人的主题与插件，也可自己定制
> 
> 其它常用的博客框架还有 [WordPress](https://wordpress.org/)、[Typecho](https://typecho.org/)等，但它们往往需要购置自己的服务器，而无法静态化地部署到 GitHub Pages。当然，功能和灵活性也会大大提升。
> 
> 静态化站点还有一个优势是访问速度往往更快。
> 
> 静态网站生成器还有 [VuePress](https://vuepress.vuejs.org) 等，但这些多为写文档而量身定制，关于博客的主题与解决办法等会少得多

先在你喜欢的地方创建一个文件夹，起一个喜欢的名字，然后右键这个文件夹选择 `Git Bash Here`

在打开的终端里输入如下命令：

```
npm install hexo-cli -g
```

> `install`：安装
> 
> `hexo-cli`：`hexo` 的终端工具，用于生成后面会用到的模版文件
> 
> `-g`：全局安装，即在电脑任何地方都可使用

然后输入：

```
hexo init 你的 GitHub 用户名.github.io
```

> `hexo` 是因为之前安装了 `hexo-cli` 这个包，所以我们能够使用 `hexo` 这一命令
> 
> `init` 初始化博客模版，后面的参数是将会新建的文件夹的名字，建议与仓库名保持一致

```
cd 你的 GitHub 用户名.github.io
npm install
# or
yarn install
hexo server
```

`server` 意思是告诉 Hexo 开启本地测试服务器。这样的话，你就可以通过浏览器访问 `localhost:4000` 看到效果了

按 `Ctrl + C`终止本地服务器运行

至此，站点的基本框架已经搭建完成了

## 使用第三方 Hexo 主题

Hexo 默认提供的主题是 [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape)

样式简单，功能少，所以大多数人并不会用默认主题

本处使用[云游君](https://yunyoujun.cn)的主题 [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun)

> 本站的主题即为 hexo-theme-yun

当然，你也可以到 [Themes｜Hexo](https://hexo.io/themes/) 寻找其它主题使用，比如 hexo-theme-next

### 下载主题

进入终端，确保路径在你之前初始化的博客文件夹下（下面简称 Hexo 目录），然后执行如下命令

>「你知道吗」可以在 VS Code 里直接打开终端

```
yarn add hexo-theme-yun # npm install -g hexo-theme-yun
```

> 注意：hexo-theme-yun 从 v1.8 开始使用 npm 包分发，你需要按照文档的步骤进行配置迁移

### 编辑 Hexo 配置

> 右键 Hexo 文件夹，选择 “使用 VS Code 打开”。此后操作都默认你处在该工作目录中

在此前初始化操作建立的 Hexo 文件目录下，会存在一个 `_config.yml` 文件

它是 Hexo 的配置文件，你可以在 [配置｜Hexo](https://hexo.io/zh-cn/docs/configuration) 处查看各配置选项的意义

在这个文件中找到 `theme` 字段，将后边的 `landscape` 修改为 `yun`

> 后边的 `yun`根据你选择的主题来设置，比如你使用 `hexo-theme-next`，那么将后面的字段设置为 `next`
> 
> 一般来说，主题都会在使用文档中声明使用了什么渲染器
> 
> 如 `hexo-theme-yun` 使用 pug 和 stylus 渲染器，而 Hexo 自带的一般是 ejs 与 stylus，所以可能需要输入下方命令安装缺失的渲染器

```
npm install hexo-renderer-pug hexo-renderer-stylus

# 如果出了问题，可以试试 yarn 安装
```

完成上述步骤以后，再次使用 `hexo server` 启动测试服务器，即可看到一个全新的页面

### 自定义主题配置

第一次启动使用的是主题的默认配置，不一定符合你的心意

所以你可以根据自己的需求，对主题进行一些自定义

主题的默认配置文件放在了 `source/主题/_config.yml`

但是直接修改这个文件将导致以后主题更新升级麻烦得很

一般来说，主题的使用文档将会给出这种情况的解决方案

如 `hexo-theme-yun` 会让用户在博客根目录新建 `_config.yun.yml`

更多配置选项请参考主题文档

## 生成站点的静态文件并部署

### 生成静态文件

直到现在为止，你之前的工作都是本地进行，你也许已经迫不及待想让博客上线了

这时，便轮到 GitHub Pages 登场了

```
# 生成静态文件
hexo generate
# 缩写为 hexo g
```

当执行完成后，Hexo 目录下会出现一个 `public` 文件夹，里边存放的是刚才生成的静态文件

### 与远程仓库进行关联

然后执行如下命令初始化 Git 仓库

```
git init #只需执行一次即可
```

部署之前，最好建立一个备份 Hexo 工作目录的分支

```
git checkout -b hexo
```

完成后，所有的工作就都将在 hexo 分支进行

安装 `hexo-deployer-git` 插件

```
npm install hexo-deployer-git
```

在 Hexo 配置文件 `_config.yml` （**不是主题的**）中配置

```
deploy:
  type: git
  repo: 你此前新建的仓库的链接 # 比如：https://github.com/Big-Cake-jpg/big-cake-jpg.github.io
  branch: master # 默认使用 master 分支
  message: Update Hexo Static Content # 你可以自定义此次部署更新的说明
```

保存并部署

> 第一次部署可能需要 GitHub 账号密码，密码输入时不会出现星号，但是密码已经输入进去了

```
hexp deploy
#缩写为 hexo d
```

等待 Git 推送完成后，在 GitHub 上依次打开 `仓库` => `Settings` => `Pages`

选择分支（一般都是 `master`），点击 `save`

等待几秒钟，打开 `https://你的 GitHub 用户名.github.io` 就可以看到线上效果了

## 备份 Hexo 工作区以及自动部署

### 备份 Hexo 工作区

上边的做法只是将生成的静态文件部署到了云端而已

为了方便在不同设备上写作以及以防万一，你的 Hexo 工作目录也应该推送到 GitHub 仓库备份

```
# 只需执行一次，这会与远程仓库建立一个连接
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
```

VS Code 中有比较方便的操作，它会在右侧栏中的“源代码管理”中显示所有你修改过的文件

你可以在顶部的输入框中输入这次改了工作区的什么文件之类的，然后按跟前的对勾即可提交到本地 Git 仓库

然后再点击最下方的蓝色大条条中的一个带俩箭头的“同步更改”按钮将 Hexo 工作区推送到 GitHub

### 自动部署

时间长了，你会发现这样还是不方便，在别的设备上你得再拉取一遍仓库，如果碰巧你用的是手机 / 平板那更是只能干瞪眼

所以现在我们需要一个持续集成服务

> 本文中使用 GitHub Actions，自身便拥有仓库的 Token ，不需要额外的配置，可直接使用 `secrets.GITHUB_TOKEN`

你可以参考 Hexo 官方文档，也可以直接照抄我的 [gh-pages.yml](https://github.com/Big-Cake-jpg/big-cake-jpg.github.io/blob/source/.github/workflows/gh-pages.yml)

> 记得把 `branch` 的值改成自己存放 Hexo 工作区的分支名，删掉 `algolia` 字段

当然，你还可以使用 Netlify、Vercel 等第三方服务

完成后，你的个人博客便基本搭建完成。你可以再对主题进行自定义，或者开始写作

## 开始写作

### 文章

输入以下命令即可新建 `xxx.md` 文件

```
hexo net post xxx
```

> [Markdown 标记语言语法等](https://younghz.github.io/Markdown/)

### 为文章添加标签/分类

你可能需要先了解 Hexo 的 Front-matter

> [Front-matter](https://hexo.io/zh-cn/docs/front-matter.html)

```
---
title: 手把手教你如何搭建属于自己的 Hexo 博客
date: 2021-12-04 16:45:10
tags:
  - GitHub  
  - Hexo 
  - 博客
categories:
  - 大蛋糕的安利
---
你的文章内容
```

### 页面

自定义页面在 Hexo 中是可以使用的，譬如直接在 `source` 下新建 HTML 进行编写

也可以通过执行下边的命令新建页面（还是 Markdown，不过你可以直接在 Markdown 里写 HTML 的，同样会渲染）

```
hexo new page xxx
```

## FAQ

### 有打算发视频吗？

没有打算，电脑被家人收了，不让我动 QWQ

二是视频制作比较麻烦，文章相对来说更加简单

### 我想绑定我自己的域名（

首先你得有个域名

将域名用 CNAME 解析到 `你的名字.github.io`（当然 A 记录直接填 GitHub Pages 的 IP 也可以）

> [GitHub 官方文档，有中文](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)

在 `source` 文件夹下新建 `CNAME` 文件（没有后缀）并填入你的域名

然后部署一次即可

如果你后边把这东西删掉的话，随后不包含它的部署将会把远程仓库里的 CNAME 覆盖掉

### 备案

要用国内服务如 CDN，不备案是真的难于上青天

这里的备案指的是 ICP 备案（就是每个国内网站页脚挂的 “京 ICP 备 xxxxxxxxxx 号” 之类的

但国内备案都要求你有一台人家的国内服务器，且购买时长至少 3 个月以上

> 需要注意的是：
> 
> - 确定域名可以备案（`moe` 之类的域名无法备案）
> 
> - 关闭评论区
> 
> - 备注说明不得包含 `交流` 字样
> 
> - 首页不能含有其他网站直达链接
> 
> - 遵纪守法（那肯定）

你也可以直接下线网站，等备案成功以后再上线（以后偶尔会复查，相对宽松很多）

按照服务商的备案步骤一步步来即可

拿到 ICP 备案号以后页脚必须清晰展示备案号，且指向 <https://beian.miit.gov.cn>

## 写在最后

个人博客可以用作许多用途，比如笔记本、回忆、创作、开发经验、生活等等

多年后，再打开它看自己写下的内容，回忆纷纷涌上心头，多么美好

希望大家的博客成功上线以后，能够承载着自己的许多回忆、承载自己的人生，走得更远

