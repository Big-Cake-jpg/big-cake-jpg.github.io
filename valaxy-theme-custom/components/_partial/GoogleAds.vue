<template>
  <div class="card min-h-20">
    <div class="p-4">
      <div class="mb-3 text-sm">{{ t("google_ads.title") }}</div>
    </div>
    <!-- <div v-if="showAds">

    </div>
    <div v-else class="fixed">
      <div class="text-center">{{ t("google_ads.unavailable") }}</div>
    </div> -->
    <div class="p-4">
      <component
        async
        :is="'script'"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3406300839504314"
        crossorigin="anonymous"
      ></component>
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-3406300839504314"
        data-ad-slot="2681266595"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <component :is="'script'">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </component>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const showAds = ref(true);

onMounted(async () => {
  const result = await axios.get("https://api.lihaoyu.cn/blog/ip/ischina");
  if (result.data.data.isChina !== "false") {
    showAds.value = false;
  }
});
</script>
