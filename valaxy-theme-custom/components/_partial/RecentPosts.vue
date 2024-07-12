<script setup lang="ts">
import { useSiteStore } from "valaxy";
import type { Post } from "valaxy";
import { computed } from "vue";

const props = withDefaults(defineProps<{ posts?: Post[] }>(), {});
const site = useSiteStore();
const recentPosts = computed(() => (props.posts || site.postList).slice(0, 4));
const formatDate = (date: string | number | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("zh-CN", options);
};
</script>

<template>
  <ul>
    <template v-for="post in recentPosts" :key="post.path">
      <li>
        <div class="text-sm mb-1">{{ formatDate(post.date as Date) }}</div>
        <RouterLink v-if="post.path" :to="post.path">
          <div class="text-sm mb-1">{{ post.title }}</div>
        </RouterLink>
      </li>
    </template>
  </ul>
</template>
