<script lang="ts" setup>
const foreverblog = {
  name: "十年之约",
  url: "https://foreverblog.cn",
  logo: "https://r2.lihaoyu.cn/2023/06/10/709c21e35d52001fb6da8e99f887980e.webp",
};
</script>

<template>
  <div class="flex-center">
    <a
      inline-flex
      :href="foreverblog.url"
      target="_blank"
      :title="foreverblog.name"
    >
      <img w="35" :src="foreverblog.logo" />
    </a>
  </div>
</template>
