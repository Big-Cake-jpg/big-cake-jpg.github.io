<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { onMounted, onBeforeMount } from "vue";
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

onBeforeMount(async () => {
  // fuck you reverse proxy
  if (isClient) {
    const allowedDomains = [
      [119, 119, 119, 46, 108, 105, 104, 97, 111, 121, 117, 46, 99, 110],
      [108, 105, 104, 97, 111, 121, 117, 46, 99, 110],
      [
        98, 105, 103, 45, 99, 97, 107, 101, 45, 106, 112, 103, 46, 103, 105,
        116, 104, 117, 98, 46, 105, 111,
      ],
      [
        98, 105, 103, 99, 97, 107, 101, 45, 98, 108, 111, 103, 46, 110, 101,
        116, 108, 105, 102, 121, 46, 97, 112, 112,
      ],
      [
        98, 105, 103, 99, 97, 107, 101, 45, 98, 108, 111, 103, 46, 118, 101,
        114, 99, 101, 108, 46, 97, 112, 112,
      ],
      [
        99, 102, 45, 112, 97, 103, 101, 115, 46, 108, 105, 104, 97, 111, 121,
        117, 46, 99, 110,
      ],
      [
        98, 105, 103, 99, 97, 107, 101, 46, 99, 97, 107, 101, 109, 99, 46, 116,
        111, 112,
      ],
      [108, 111, 99, 97, 108, 104, 111, 115, 116],
    ].map((domain) => String.fromCharCode(...domain));

    const currentDomain = window.location.hostname;
    if (!allowedDomains.includes(currentDomain)) {
      window.location.href = "https://" + allowedDomains[0];
    }
  }
});

onMounted(async () => {
  (app.showLoading = false), 
  await import("@fontsource/noto-sans-sc/400.css");
});
</script>
<template>
  <PageLoading v-if="app.showLoading && theme.pageLoading" />
</template>
