<script lang="ts" setup>
const foreverblog = {
  name: "十年之约",
  url: "https://foreverblog.cn",
  logo: "https://r2.230225.xyz/2023/06/10/709c21e35d52001fb6da8e99f887980e.webp",
};
</script>

<template>
  <div class="flex-center logos">
    <a
      inline-flex
      :href="foreverblog.url"
      target="_blank"
      :title="foreverblog.name"
    >
      <img width="150" height="50" loading="lazy" :src="foreverblog.logo" />
    </a>
  </div>
</template>

<style>
.logos {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>