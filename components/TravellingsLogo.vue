<script lang="ts" setup>
const travellings = {
  name: "开往",
  url: "https://www.travellings.cn/go.html",
  logo: "https://www.travellings.cn/assets/logo.svg",
};
</script>

<template>
  <div class="flex-center logos">
    <a
      inline-flex
      :href="travellings.url"
      target="_blank"
      :title="travellings.name"
    >
      <img width="150" height="50" :src="travellings.logo" />
    </a>
  </div>
</template>

<style>
.logos {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
