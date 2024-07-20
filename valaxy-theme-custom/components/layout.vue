<script setup lang="ts">
import { useThemeConfig } from "../composables";

const themeConfig = useThemeConfig();
</script>

<template>
  <div>
    <SiteAnnouncement v-if="themeConfig.announcement.enable"></SiteAnnouncement>
    <Navbar />
    <slot>
      <RouterView />
    </slot>
    <Footer />
  </div>
</template>
