<script setup lang="ts">
import { isClient } from "@vueuse/core";

function backToTop() {
  if (!isClient) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <button
    aria-label="Back to top"
    @click="backToTop()"
    class="button is-medium"
  >
    <span class="icon i-ic-baseline-arrow-upward"></span>
  </button>
</template>
