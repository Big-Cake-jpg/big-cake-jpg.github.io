<script setup lang="ts">
import { computed } from 'vue';
import type { Post, Categories } from 'valaxy';
import { useSiteConfig, useSiteStore, useCategories, useTags } from 'valaxy';
import { useThemeConfig } from '../../../composables';
import { useI18n } from 'vue-i18n';
const props = withDefaults(defineProps<{
    type?: string
    posts?: Post[]
    categories?: Categories[]
    curPage?: number
}>(), {
    curPage: 1,
})

const siteConfig = useSiteConfig();
const themeConfig = useThemeConfig();
const siteStore = useSiteStore();
const posts = computed(() => (
    props.posts || siteStore.postList).filter(post => import.meta.env.DEV ? true : !post.hide),
)
const categories = useCategories();
const tags = useTags();
const { t } = useI18n();
</script>

<template>
    <div class="card p-4">
            <div class="mb-1 flex flex-col justify-center items-center text-center">
                <img width="96" height="96" :src="siteConfig.author.avatar"
                    class="rounded-full mb-2" loading="lazy" :alt="`${siteConfig.author.name}'s Avatar`">
                <p class="text-2xl mb-1">{{ siteConfig.author.name }}</p>
                <p class="text-sm mb-1">{{ themeConfig.author.slogan }}</p>
            </div>
            <nav class="grid grid-cols-3">
                <div class="text-center">
                    <div>
                        <p class="heading text-lg">{{ posts.length }}</p>
                        <p class="text-sm">{{ t("posts") }}</p>
                    </div>
                </div>
                <div class="text-center">
                    <div>
                        <p class="heading text-lg">{{ (Array.from(categories.children).length) }}</p>
                        <p class="text-sm">{{ t("categories") }}</p>
                    </div>
                </div>
                <div class="text-center">
                    <div>
                        <p class="heading text-lg">{{ (Array.from(tags).length) }}</p>
                        <p class="text-sm">{{ t("tags") }}</p>
                    </div>
                </div>
            </nav>
        </div>
</template>