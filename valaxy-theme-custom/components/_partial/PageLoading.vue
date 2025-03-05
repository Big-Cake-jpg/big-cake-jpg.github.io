<template>
  <Transition name="fade">
    <div
      class="flex justify-center text-center relative flex-col left-0 right-0 min-h-screen items-center z-50 w-full box-border -mt-[45vh] -mb-[45vh] pt-[45vh] pb-[45vh] bg-[var(--bulma-background)]"
    >
      <p class="text-lg mb-5">{{ t("loading") }}</p>
      <progress class="progress is-small max-w-75" max="100"></progress>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
