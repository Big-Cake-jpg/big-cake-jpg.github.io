<template>
  <div v-if="showAds" class="card min-h-20">
    <div class="p-4">
      <div class="mb-3 text-sm">{{ t("google_ads") }}</div>
    </div>
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-3406300839504314"
      data-ad-slot="2681266595"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { isClient, useScriptTag } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const showAds = ref(false);

onMounted(async () => {
  const result = await axios.get("https://api.lihaoyu.cn/blog/ip/ischina");
  if (result.data.data.isChina === "false") {
    useScriptTag(
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3406300839504314",
      () => {},
      {
        async: true,
        crossOrigin: "anonymous",
      }
    );
    showAds.value = true;
    if (isClient) {
      // @ts-expect-error
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
});
</script>
