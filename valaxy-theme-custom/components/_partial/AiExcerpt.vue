<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();

const props = defineProps<{
  blogId?: string;
  content?: string;
}>();

const excerpt = ref<string>("");
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);
const currentBlogId = ref<string>(props.blogId || "");
const currentContent = ref<string>(props.content || "");

const getSlugFromUrl = (): string => {
  const path = window.location.pathname;
  const match = path.match(/\/posts\/([^\/]+)/);
  return match ? match[1] : "";
};

const getMarkdownContent = (): string => {
  const markdownBody = document.querySelector(".markdown-body");
  return markdownBody ? markdownBody.textContent || "" : "";
};

const getPageInfo = () => {
  currentBlogId.value = props.blogId || "";
  currentContent.value = props.content || "";

  if (!currentBlogId.value) {
    currentBlogId.value = getSlugFromUrl();
  }

  if (!currentContent.value) {
    currentContent.value = getMarkdownContent();
  }

  if (currentBlogId.value) {
    fetchExcerpt();
  } else {
    error.value = "无法获取文章标识";
  }
};

const fetchExcerpt = async () => {
  if (!currentBlogId.value) {
    error.value = "需要提供博客ID";
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch(
      `https://api.lihaoyu.cn/blog/summary/${currentBlogId.value}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: currentContent.value || "" }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    excerpt.value = data.summary;
  } catch (err) {
    console.error("获取摘要失败:", err);
    error.value = err instanceof Error ? err.message : "获取摘要失败";
  } finally {
    isLoading.value = false;
  }
};

watchEffect(() => {
  if (typeof window !== "undefined" && route.path) {
    setTimeout(() => {
      getPageInfo();
    }, 300);
  }
});

watch(
  () => [props.blogId, props.content],
  ([newBlogId]) => {
    if (newBlogId) {
      currentBlogId.value = newBlogId;
      fetchExcerpt();
    }
  }
);

onMounted(() => {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      getPageInfo();
    }, 100);
  }
});
</script>

<template>
  <div
    class="ai-generated-excerpt rounded-lg p-4 border-gray-500 text-[var(--bulma-card-color)] bg-[var(--bulma-background)]"
  >
    <div font="black" class="flex items-center">
      <div mr-2 i-ri-robot-2-line />
      <div>
        {{ t("excerpt.ai") }}
      </div>
    </div>
    <div
      op="90"
      class="mt-3 bg-[var(--bulma-card-background-color)] border-gray-500 p-2 rounded-lg text-md"
    >
      <div v-if="isLoading" class="w-full p-2">
        <div class="h-5 is-skeleton rounded mb-4"></div>
        <div class="h-5 is-skeleton rounded mb-4"></div>
        <div class="h-5 is-skeleton rounded mb-4"></div>
        <div class="h-5 is-skeleton w-3/4 rounded"></div>
      </div>
      <div v-else-if="error" class="p-2">
        {{ error }}
      </div>
      <div v-else-if="excerpt" class="p-2">
        {{ excerpt }}
      </div>
    </div>
  </div>
</template>
