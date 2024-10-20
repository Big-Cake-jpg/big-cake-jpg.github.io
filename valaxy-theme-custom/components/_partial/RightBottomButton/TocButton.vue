<script setup lang="ts">
import { useOutline } from "valaxy";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { headers, handleClick } = useOutline();
const OutlineItemShow = ref(false);

const closeOutline = () => {
  OutlineItemShow.value = false;
};
</script>

<template>
  <button
    aria-label="Open post toc"
    @click="OutlineItemShow = !OutlineItemShow"
    class="button is-medium"
  >
    <span class="icon i-ic-baseline-toc"></span>
  </button>

  <div v-if="OutlineItemShow === true" class="fixed bottom-0 right-0 m-8 z-15">
    <div class="card">
      <div class="card-content">
        <div class="grid grid-cols-2 flex content-center justify-between">
          <div class="mb-3 text-sm order-first">{{ t("aside.toc") }}</div>
          <div class="mb-3 text-sm order-last">
            <button @click="closeOutline" aria-label="Close post toc">
              <span class="icon i-ri-close-line"></span>
            </button>
          </div>
        </div>
        <div class="max-h-38 overflow-y-auto">
          <OutlineItem
            :headers="headers"
            :on-click="handleClick"
            root
            @click="OutlineItemShow = false"
            @close-menu="closeOutline"
          />
        </div>
      </div>
    </div>
  </div>
</template>
