---
layout: post
title: 通过自定义主题重写我的博客
date: 2024-07-10 14:43:13
updated: 2024-07-10 14:43:13
categories: 技术
tags:
  - Valaxy
---

~~我的老天，感谢 Restent 的馈赠（不是~~

<!-- more -->

## 起因

其实 Yun 主题挺好看的，功能也很丰富。唯一可惜的一点是 PageSpeed Insights 的评分太低了。

Restent 最近又用 Nuxt 自己车了一套博客给自己用，然后他将[之前所写的 Valaxy 主题](https://github.com/s-complex/previous-valaxy-blog)开源了出来。

一开始我为了统一风格，想基于他的这个“半成品”自己写一个 Material You 风格的主题，但由于 Vite 配置文件的一些问题不得不作罢，使用 Bulma 来进行重写。

目前基本上大多数东西都能正常用，但是标签、分类浏览 Restent 当时没有做，我也没有写出来，就先放缓了。

## 实践

### 本地引用主题

首先我把他的主题文件夹下载了下来，放在项目根目录下，然后进行了链接：

```bash
pnpm install ./valaxy-theme-custom
```

这样一来这个文件夹应该就可以像 npm 包一样进行使用了。

### 移除不需要的东西

Restent 使用了 Roboto 和 JetBrains Mono 作为显示字体，但我个人不是很喜欢这两个字体和 Bulma 在一起搭配的效果，于是删了。

```diff
<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';

useHead({
    link: [
        {
            rel: 'canonical',
            href: 'https://blog.gxres.net'
        },
        {
            rel: 'preconnect',
            href: 'https://i.yecdn.com'
        }
    ]
})

onMounted(async () => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://umami.slirv.vip/script.js'
    script.dataset.websiteId = 'a1102895-db17-4356-8d49-355b6fef337e'
    document.head.appendChild(script)

-   await import('@fontsource/roboto/400.css')
-   await import('@fontsource/jetbrains-mono/400.css')
})
</script>
```

### 重新排版

原本的主题中，Restent 设计的是双栏布局，而我在使用 Yun 时已经习惯了三栏式布局，于是将样式调整为了三栏，并且适当增大了宽度。

![1720596051888.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/07/10/668e3659ec493.webp)

方法也很简单，把 layouts 文件夹中那几个布局模板改下，加一个 Grid column 就好了。

### 适配其他页面

在我尝试搬友链页面的时候，发现什么东西都没用，只有渲染过的 Markdown。

然后翻了翻文档，看到了这个：

![1720596284917.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/07/10/668e373ea6de3.webp)

Restent 自己的主题原本是只写了一个 `<RouterView />` 在里面的，于是我将其他 layout 随便复制了一个过来改了一下，得到了下面的效果：

![1720596852329.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/07/10/668e39765bcb3.webp)

因为实在是懒得再用 Bulma 写一个友链组件了，于是直接上了 Yun 的，只是改了一下不让它再去用衬线字体了。

### 修改组件样式与逻辑

#### 文章目录

文章目录组件里的样式是 Restent 自己写的，他后来也跟我说本来就不该像当时那样写。

我后来自己改成了这样：

![1720596997454.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/07/10/668e3a0719a28.webp)

#### 捐赠

一开始捐赠组件中的捐赠途径 Restent 写死了，我后来自己改了一下，使得它可以通过 siteConfig 自定义了。

![1720598521438.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/07/10/668e3ffb94fd3.webp)

```vue
<template>
  <div class="card" v-if="siteConfig.sponsor.enable">
    <div class="card-content">
      <div class="content">
        <p class="text-center">喜欢这篇文章？能不能考虑一下投喂我（x</p>
        <div class="grid grid-cols-4 justify-items-center">
          <a
            target="_blank"
            v-for="methods in siteConfig.sponsor.methods"
            :style="{ backgroundColor: methods.color }"
            class="button is-link"
            :href="methods.url"
          >
            <span :class="methods.icon"></span>&nbsp;{{ methods.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSiteConfig } from "valaxy";

const siteConfig = useSiteConfig();
</script>
```

#### 页脚

页脚的话，我加了一个一言和修改说明。因为备案了，所以还得再加一个备案显示。最后的效果是这样的：

![1720599200979.webp](https://objects.lihaoyu.cn/bigcake-blog-images/2024/07/10/668e42a36cc6d.webp)

#### 返回顶部

我一直觉得此前用 `<a href="#" />` 的方式实现返回页面顶部不是特别舒服，因为没有平滑滚动，于是自己写了一点 JavaScript。现在感觉很舒服了。

### 添加新的组件

由于变成三栏式了，所以两边显得有些空空的，于是瞎写了一堆可有可无的组件加上去充个数。

我个人认为目录应该位于侧栏最顶部，于是正好把这玩意儿放在了右栏的最上方。至于右栏剩下的地方，则通过全站友情链接来充数了。

顶栏的空间没办法放太多页面导航链接，就又糊了一个组件放其他的页面链接。

### 颜色主题切换

我的老天爷，一打开 `Navbar.vue`，我人都傻了：怎么一大堆 document 啊？！仔细一看，哦，原来是 Restent 实现深浅色模式切换的代码。

不得不说用是能用，但是有点问题：Artalk 似乎不会随系统切换自己的颜色模式。

没关系，Valaxy 有个全局状态 `isDark` 和 `toggleDark()`，短短几行 JS 就可以直接实现很不错的切换了。

```vue
<template>
  <button class="navbar-item" @click="toggleDark" aria-label="Switch theme">
    <div class="icon text-xl i-ri-contrast-2-line" />
  </button>
</template>
<script lang="ts" setup>
import { useAppStore } from "valaxy";

const appStore = useAppStore();
const toggleDark = () => appStore.toggleDark();
</script>
```

差不多也就是这些了，看看之后会怎么样吧。
