<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'
useScriptTag('https://busuanzi.icodeq.com/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <div class="copyright flex justify-center items-center">
      <div i-ri-user-line> </div><span id="busuanzi_value_site_pv" />｜<div i-ri-eye-line> </div><span id="busuanzi_value_site_uv" />
    </div>
  </YunFooter>
</template>