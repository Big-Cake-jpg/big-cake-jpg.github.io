<script setup lang="ts">
import { useThemeConfig } from "../../composables";

const themeConfig = useThemeConfig();
</script>

<template>
  <div
    class="w-full min-h-8 px-3"
    style="background-color: var(--bulma-warning)"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="text-center font-medium"
        style="display: flex; align-items: center; justify-content: center"
      >
        <span class="icon i-ic-baseline-warning" />
        &nbsp;
        <span>{{ themeConfig.announcement.content }}</span>
      </div>
    </div>
  </div>
</template>
