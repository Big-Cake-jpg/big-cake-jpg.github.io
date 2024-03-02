---
layout: post
title: 在 Valaxy 中使用 Artalk 作为评论系统
date: 2024-02-01 11:23:19
updated: 2024-02-01 11:23:19
tags:
  - Valaxy
  - Artalk
  - 评论系统
categories: 技术
---
废了老半天劲，终于摆脱了 Waline 苦海，投入了 Artalk 的怀抱。

## 前言

Restent 在使用 VitePress 作为框架驱动博客后便抛弃了 Waline，使用 Artalk 作为评论系统，还写了一篇文章 [迁移评论系统至 Artalk](https://blog.gxres.net/posts/Move-to-Artalk-comment-system.html) 记录。此前他也向我发出邀约并称还能将他的 Artalk 实例开一个站给我，当时我选择考虑一下。

后来他更换了自己的邮箱地址，但由于 Waline 的后端过于简单而无法修改自己注册账号的邮箱，迫不得已麻烦我改数据库。

同时，Waline 基于无服务器函数也带来了一系列弊端：评论速度过于缓慢、Vercel 限制、图床找不到合适解决方案等等。

自此，我便决定更换评论系统。在网上搜索以后才发现这简直是前无古人后无来者——根本没有现成的为 Valaxy 更换 Artalk 评论系统的资料。我决定做这个第一人。

<!-- more -->

## 那么，怎么做？

### 部署 Artalk 后端

Artalk 的后端大家都知道是 Go，所以需要一个服务器了。我这里使用的是我朋友 [XieXiLin](https://www.xiexilin.com) 购买的云服务器。

Restent 自己的文章里使用的是 Docker 部署，但我玩不来 Docker（指会被 Docker 搞高血压），于是选择了直接部署。

首先，打开 Artalk 的 GitHub 仓库，在 Releases 找到最新版本，选择对应操作系统和架构的后端程序复制链接。

![1706758841310.webp](https://r2.230225.xyz/2024/02/01/65bb12bc6f083.webp)

接下来，登录服务器的 SSH，找一个地方，用 wget 下载文件：

```bash
wget https://github.com/ArtalkJS/Artalk/releases/download/v2.8.0/artalk_v2.8.0_linux_amd64.tar.gz
```

:::warning
鉴于 GitHub 在国内的连通性，如果你想在国内服务器上部署，则可能需要配置代理或者使用镜像。
:::

下载完成并解压，先对 `artalk.yml` 进行编辑，配置 Artalk，然后执行 `./artalk admin` 创建管理员账号。创建完成后，执行 `./artalk server` 启动后端。

### 公网访问

尽管这台服务器有公网 IP，但是我打算使用 Cloudflare Tunnels 将它直接连接到 Cloudflare 网络，这样不仅能够在公网上访问，也能体验到一系列 Cloudflare 的服务。

具体方式请查看 Cloudflare 的文档或者互联网上的资料，这里不再赘述。

### 插入到 Valaxy 博客

现在才是重头戏：插入到 Valaxy 博客。

我使用的主题是 Yun，一般来讲不同主题大同小异（虽然 Valaxy 也没多少主题吧）。

首先我们需要安装一下 Artalk 的 npm 包（我自己用的是 yarn）。

::: code-group

```bash [pnpm]
pnpm i artalk
```

```bash [yarn]
yarn add artalk
```

```bash [npm]
npm i artalk
```

:::

安装好之后，在 `components` 目录下新建一个 `YunComment.vue` 文件，写入如下内容：

```vue
<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import "artalk/dist/Artalk.css";
import Artalk from "artalk";

let artalk: Artalk;

const route = useRoute();

onMounted(() => {
  artalk = Artalk.init({
    el: ".comment",
    pageKey: route.path,
    pageTitle: `${document.title}`,
    server: "https://artalk.example.com",
    site: "示例站点",
    useBackendConf: true,
    locale: "auto",
  });
});

onUnmounted(() => {
  artalk.destroy()
})
</script>

<template>
  <YunCard w="full" p="4" class="comment yun-comment sm:p-6 lg:px-12 xl:px-16">
    <ClientOnly>
      <div ref="el"></div>
    </ClientOnly>
  </YunCard>
</template>

<style lang="scss">
.comment {
  .atk-list {
    width: 90%;
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  ol {
    list-style: decimal;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
```
:::warning
这样做会直接覆盖 Yun 主题的同名组件，实现细致的调整。但日后如果你想换回 Waline 或者 Twikoo，则需要删除这个组件。
:::

除此以外，我们还需要在 `styles` 文件夹中新建一个 `css-vars.scss` 文件写入样式，从而让 Artalk 适配 Valaxy 的深浅色模式切换而无需再写一堆 TypeScript：

```css
.atk-send-btn {
  background: var(--va-c-primary) !important;
}
.artalk > .atk-list > .atk-list-header .atk-right-action > span.atk-on,
.artalk > .atk-list > .atk-list-header .atk-right-action > span.atk-on * {
  color: var(--va-c-primary) !important;
}
.atk-comment > .atk-main > .atk-header .atk-item.atk-nick,
.atk-comment > .atk-main > .atk-header .atk-item.atk-nick a {
  color: var(--va-c-primary) !important;
}
.atk-comment > .atk-main > .atk-header .atk-item.atk-reply-at > .atk-nick {
  color: var(--va-c-primary) !important;
}
.artalk > .atk-list > .atk-list-footer .atk-copyright a {
  color: var(--va-c-primary) !important;
}

.atk-dropdown-item:active {
  color: var(--va-c-primary) !important;
}

.dark {
  .artalk {
    --at-color-font: #fff !important;
    --at-color-deep: #e7e7e7 !important;
    --at-color-sub: #e7e7e7 !important;
    --at-color-grey: #fff !important;
    --at-color-meta: #fff !important;
    --at-color-border: #2d3235 !important;
    --at-color-light: #687a86 !important;
    --at-color-bg: #1e2224 !important;
    --at-color-bg-transl: rgba(30, 34, 36, 0.95) !important;
    --at-color-bg-grey: #46494e !important;
    --at-color-bg-grey-transl: rgba(8, 8, 8, 0.95) !important;
    --at-color-bg-light: rgba(29, 161, 242, 0.1) !important;
    --at-color-red: #ff5652 !important;
    --at-color-pink: #fa5a57 !important;
    --at-color-yellow: #ff7c37 !important;
    --at-color-green: #4caf50 !important;
    --at-color-gradient: linear-gradient(
      180deg,
      transparent,
      rgba(30, 34, 36, 1)
    ) !important;
  }
}

// 下面这一堆似乎不起作用，我也不知道，先摆了，大家有建议的可以提出来。
.artalk {
  .atk-dropdown-item.active,
  .atk-dropdown-item:hover {
    color: var(--va-c-primary) !important;
  }
}
```

做完这一切之后，我们就可以部署到线上了。现在打开你的站点，开始体验 Artalk 的极致速度吧！
