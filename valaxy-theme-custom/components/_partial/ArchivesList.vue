<script setup lang="ts">
import { computed } from "vue";
import { useSiteStore } from "valaxy";
import type { Post } from "valaxy/types";

const props = withDefaults(
  defineProps<{
    type?: string;
    posts?: Post[];
  }>(),
  {}
);

const site = useSiteStore();

const posts = computed(() =>
  (props.posts || site.postList).filter((post) =>
    import.meta.env.DEV ? true : !post.hide
  )
);

// 按年份分组并排序
const groupedPosts = computed(() => {
  const groups: { [key: string]: Post[] } = {};
  posts.value.forEach((post) => {
    const year = new Date(String(post.date)).getFullYear().toString();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(post);
  });
  return Object.entries(groups).sort(([yearA], [yearB]) =>
    yearB.localeCompare(yearA)
  );
});

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
  <div v-for="(group, index) in groupedPosts" :key="index">
    <div class="text-3xl" :class="index === 0 ? 'mb-3' : 'my-3'">
      {{ group[0] }}
    </div>
    <ul class="space-y-4">
      <li
        v-for="(post, index) in group[1]"
        :key="post.path"
        :class="{ 'mb-0': index === group[1].length - 1 }"
      >
        <RouterLink v-if="post.path" :to="post.path">
          <div class="card rounded-md">
            <div class="media">
              <div class="media-content p-2 m-2">
                <p class="font-semibold">{{ post.title }}</p>
                <p class="text-sm truncate">
                  {{ formatDate(String(post.date)) }}
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
