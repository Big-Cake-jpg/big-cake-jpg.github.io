<script setup lang="ts">
import { computed } from "vue";
import { useSiteConfig, useSiteStore } from "valaxy";
import type { Post } from "valaxy/types";

const props = withDefaults(
  defineProps<{
    type?: string;
    posts?: Post[];
    curPage?: number;
  }>(),
  {
    curPage: 1,
  }
);

const site = useSiteStore();
const siteConfig = useSiteConfig();
const pageSize = computed(() => siteConfig.value.pageSize);

const posts = computed(() =>
  (props.posts || site.postList).filter((post) =>
    import.meta.env.DEV ? true : !post.hide
  )
);

const displayedPosts = computed(() =>
  posts.value.slice(
    (props.curPage - 1) * pageSize.value,
    props.curPage * pageSize.value
  )
);
</script>

<template>
  <ul class="space-y-4">
    <li
      v-for="(post, index) in displayedPosts"
      :key="post.path"
      :class="{ 'mb-0': index === posts.length - 1 }"
    >
      <PostCard :post="post" />
    </li>
  </ul>
  <br />
  <Pagination :cur-page="curPage" :page-size="pageSize" :total="posts.length" />
</template>
