<script setup lang="ts">
import { useThemeConfig } from "../../composables";
import { computed } from "vue";

const themeConfig = useThemeConfig();

const isNormalInfo = computed(
  () => themeConfig.value.announcement.type === "info"
);
const isWarningInfo = computed(
  () => themeConfig.value.announcement.type === "warning"
);
</script>

<template>
  <div
    class="w-full min-h-8 px-3"
    style="background-color: var(--bulma-primary-light)"
    v-if="isNormalInfo"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="text-center font-medium"
        style="display: flex; align-items: center; justify-content: center"
      >
        <span class="icon i-ri-information-fill" />
        &nbsp;
        <span>{{ themeConfig.announcement.content }}</span>
      </div>
    </div>
  </div>
  <div
    class="w-full min-h-8 px-3"
    style="background-color: var(--bulma-warning)"
    v-else-if="isWarningInfo"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="text-center font-medium text-black"
        style="display: flex; align-items: center; justify-content: center"
      >
        <span class="icon i-ic-baseline-warning" />
        &nbsp;
        <span>{{ themeConfig.announcement.content }}</span>
      </div>
    </div>
  </div>
</template>
