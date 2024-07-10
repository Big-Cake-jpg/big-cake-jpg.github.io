<script setup lang="ts">
import type { MenuItem } from 'valaxy'

defineProps<{
  headers: MenuItem[]
  onClick: (e: MouseEvent) => void
  root?: boolean
}>()
</script>

<template>
  <div class="menu">
    <ul :class="root ? 'root' : 'nested'" class="toc menu-list">
      <li v-for="{ children, link, title, lang } in headers" :key="link" class="va-toc-item" :lang="lang || 'zh-CN'">
        <a class="outline-link" :href="link" @click="onClick">
          {{ title }}
        </a>
        <template v-if="children?.length">
          <OutlineItem :headers="children" :on-click="onClick" />
        </template>
      </li>
    </ul>
  </div>
</template>