<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';

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

onMounted(async () => {
    await import("@fontsource/noto-sans-sc/400.css");
})
</script>