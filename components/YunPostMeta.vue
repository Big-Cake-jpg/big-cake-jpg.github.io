<script lang="ts" setup>
import type { Post } from 'valaxy'
import YunPostMeta from 'valaxy-theme-yun/components/YunPostMeta.vue'

defineProps<{
  frontmatter: Post
}>()
</script>
 
<template>
  <YunPostMeta :frontmatter="frontmatter">
    <!-- <div class="flex justify-center items-center">
      <span id="busuanzi_container_page_pv" i-ri-eye-line></span><span id="busuanzi_value_page_pv"></span>
    </div> -->
  </YunPostMeta>
</template>
