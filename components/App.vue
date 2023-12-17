<script lang="ts" setup>
import { useAppStore, useSiteConfig } from "valaxy";
import { onMounted } from "vue";
import { useThemeConfig } from "valaxy-theme-yun/composables";

const siteConfig = useSiteConfig();
const themeConfig = useThemeConfig();

const app = useAppStore();
onMounted(() => {
  app.showLoading = false;
});
</script>

<template>
  <YunFireworks v-if="themeConfig.fireworks.enable" />
  <slot name="bg">
    <YunBg v-if="themeConfig.bg_image.enable" />
  </slot>
  <YunSearchTrigger v-if="siteConfig.search.enable" />
  <Transition name="fade">
    <YunLoading v-if="app.showLoading" />
  </Transition>
</template>
