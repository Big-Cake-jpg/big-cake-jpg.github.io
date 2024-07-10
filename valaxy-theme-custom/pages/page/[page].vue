<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { Head } from '@unhead/vue/components';

const route = useRoute()
const pageIndex = computed(() => Number.parseInt((route.params as { page: string }).page))
</script>

<template>
  <Head>
    <title>第 {{ pageIndex }} 页</title>
  </Head>
  <PostList :cur-page="pageIndex" />
</template>