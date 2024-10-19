<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { onMounted } from "vue";
import { useAppStore, useSiteConfig } from "valaxy";
import { useRoute } from "vue-router";
import { useThemeConfig } from "./composables";
import { isClient } from "@vueuse/core";

const route = useRoute();
const site = useSiteConfig();
const theme = useThemeConfig();

useHead({
  link: [
    {
      rel: "canonical",
      href: site.value.url?.slice(0, -1) + route.path,
    },
    {
      rel: "preconnect",
      href: "https://objects.lihaoyu.cn",
    },
  ],
});

const app = useAppStore();

onMounted(async () => {
  (app.showLoading = false), await import("@fontsource/noto-sans-sc/400.css");

  // fuck you reverse proxy
  if (isClient) {
    const allowedDomains = [
      "www.lihaoyu.cn",
      "lihaoyu.cn",
      "big-cake-jpg.github.io",
      "bigcake-blog.netlify.app",
      "bigcake-blog.vercel.app",
      "cf-pages.lihaoyu.cn",
      "bigcake.cakemc.top",
      "localhost"
    ];
    const currentDomain = window.location.hostname;
    if (!allowedDomains.includes(currentDomain)) {
      window.location.href = "https://www.lihaoyu.cn";
    }
  }
});
</script>
<template>
  <PageLoading v-if="app.showLoading && theme.pageLoading" />
</template>
