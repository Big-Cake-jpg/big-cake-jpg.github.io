<script lang="ts" setup>
import YunFooter from "valaxy-theme-yun/components/YunFooter.vue";
// import { useHead } from "@vueuse/head";
// import { onMounted } from "vue";

/* useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://jsd.onmicrosoft.cn/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css",
    },
  ],
});

onMounted(() => {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://jsd.onmicrosoft.cn/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.min.js";
  document.body.appendChild(script);
}); */
</script>

<template>
  <YunFooter>
    <VCLiveTime start-time="2021-09-20">
      <template #live-time-before>
        <span>风雨交加，已经在网络的海洋上航行了</span>
      </template>
      <template #live-time-after>
        <span>(●'◡'●)</span>
      </template>
    </VCLiveTime>
    <a href="https://icp.gov.moe/?keyword=20230105" target="_blank"
      >萌 ICP 备 20230105 号</a
    >
    <ForeverblogLogo />
    <UpyunSupport />
    <FooterLink />
  </YunFooter>
</template>
