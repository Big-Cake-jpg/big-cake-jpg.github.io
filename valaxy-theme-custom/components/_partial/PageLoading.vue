<template>
  <Transition name="fade">
    <div
      class="flex justify-center text-center absolute flex-col left-0 right-0 bottom-0 top-0 items-center z-50"
    >
      <p class="text-lg mb-5">{{ t("loading") }}</p>
      <progress class="progress is-small max-w-75" max="100"></progress>
    </div>
  </Transition>
</template>
<style scoped>
div {
  background-color: var(--bulma-background);
}
</style>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
