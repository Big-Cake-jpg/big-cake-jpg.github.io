<script setup lang="ts">
import { useAppStore } from "valaxy";
import { onMounted } from "vue";
import { Head } from "@unhead/vue/components";
import { useThemeConfig } from "../composables";

const themeConfig = useThemeConfig();
const app = useAppStore();
onMounted(() => {
  app.showLoading = false;
});
</script>

<template>
  <div v-if="app.showLoading">
    <Head>
      <title>加载中</title>
    </Head>
  </div>
  <div v-else>
    <SiteAnnouncement v-if="themeConfig.announcement.enable"></SiteAnnouncement>
    <Navbar />
    <slot>
      <RouterView />
    </slot>
    <Footer />
  </div>
</template>
