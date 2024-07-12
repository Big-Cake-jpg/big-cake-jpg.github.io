<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useAppStore } from 'valaxy'

useHead({
    link: [
        {
            rel: 'canonical',
            href: 'https://www.lihaoyu.cn'
        },
        {
            rel: 'preconnect',
            href: 'https://objects.lihaoyu.cn'
        }
    ]
})

const app = useAppStore()

onMounted(async () => {
    await import("@fontsource/noto-sans-sc/400.css");
    app.showLoading = false
})
</script>
<template>
    <PageLoading v-if="app.showLoading" />
</template>