<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { onMounted } from "vue";
import { useAppStore, useSiteConfig } from "valaxy";
import { useRoute } from "vue-router";

const route = useRoute();
const site = useSiteConfig();

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
  (app.showLoading = false),
    window.addEventListener("load", () => {
      setTimeout(() => {
        import("@fontsource/noto-sans-sc/400.css");
      }, 500);
    });
});
</script>
<template>
  <PageLoading v-if="app.showLoading" />
</template>
