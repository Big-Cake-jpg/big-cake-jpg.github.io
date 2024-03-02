<script lang="ts" setup>
const upyun = {
  name: "又拍云",
  url: "https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral",
  logo: "https://r2.230225.xyz/2023/09/08/64fb26d231552.webp",
};
</script>

<template>
  <div class="flex-center">
    <span mr-1>由</span>
    <a inline-flex :href="upyun.url" target="_blank" :title="upyun.name">
      <img class="upyun-logo" width="100" height="25" m="b-2px l-1 r-2" :src="upyun.logo">
    </a>
    <span>提供云存储服务</span>
  </div>
</template>
