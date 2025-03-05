<script lang="ts" setup>
import { useRandomData } from "../../composables/helper";
import { onImgError } from "../../utils/index";
import { computed, ref } from "vue";

interface LinkType {
  avatar: string;
  name: string;
  url: string;
  color: string;
  blog: string;
  desc: string;
  healthy: boolean;
}

const loading = ref(true);

const props = defineProps<{
  links: string | LinkType[];
  random: boolean;
  /**
   * @description: 图片加载失败时显示的图片
   */
  errorImg?: string;
}>();

const { data } = useRandomData(props.links, props.random);

const filteredData = computed(() => {
  const result = data.value?.filter((link) => link.healthy !== false) || [];
  if (result.length > 0 || data.value !== undefined) {
    loading.value = false;
  }
  return result;
});
function onError(e: Event) {
  onImgError(e, props.errorImg);
}

const placeholderCount = 10;
const placeholders = Array(placeholderCount).fill(null);
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <template v-if="loading">
      <div v-for="(_, index) in placeholders" :key="index" class="box animate-pulse">
        <div class="media flex items-center">
          <div class="media-left mr-3">
            <div class="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
          <div class="media-content w-full">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>
        </div>
      </div>
    </template>

    <a 
      v-for="link in filteredData" 
      :key="link.url" 
      :href="link.url" 
      target="_blank" 
    >
      <div class="box h-full">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                width="64"
                height="64"
                :src="link.avatar"
                alt="friend-links-avatar"
                @error="onError"
                loading="lazy"
                class="rounded-lg"
              />
            </figure>
          </div>
          <div class="media-content truncate">
            <div class="content text-nowrap">
              <p class="truncate">
                <strong>{{ link.blog }}</strong>
                <br />
                {{ link.desc }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </a>
  </div>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>