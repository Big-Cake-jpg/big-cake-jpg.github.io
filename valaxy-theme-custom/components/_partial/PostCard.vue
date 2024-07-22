<script setup lang="ts">
import type { Post } from "valaxy";

defineProps<{
  post: Post;
}>();

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
  <div class="card">
    <RouterLink v-if="post.path && post.cover" :to="post.path">
      <div class="card-image">
        <figure class="h-80 relative">
          <img
            class="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
            :src="post.cover"
            alt="Post cover image"
          />
        </figure>
      </div>
    </RouterLink>
    <div class="card-content">
      <RouterLink v-if="post.path" :to="post.path">
        <p class="text-2xl mb-2">{{ post.title }}</p>
      </RouterLink>
      <div class="content" v-if="post.excerpt" v-html="post.excerpt"></div>
      <hr />
      <div class="grid grid-cols-3">
        <p class="text-left col-span-2">
          {{ formatDate(post.date as Date) }} &#x2022;
          {{ Array.isArray(post.categories) ? post.categories.flat().join(', ') : post.categories ?? "未分类" }}
        </p>
        <p class="text-right">
          <RouterLink v-if="post.path" :to="post.path"> 阅读全文 </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
