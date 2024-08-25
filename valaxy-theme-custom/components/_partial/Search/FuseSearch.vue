<script lang="ts" setup>
import type { UseFuseOptions } from "@vueuse/integrations/useFuse";
import { useFuse } from "@vueuse/integrations/useFuse";
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useSiteConfig } from "valaxy";
import markdownit from "markdown-it";
import type { FuseListItem } from "valaxy/types";

const searchContainer = ref<HTMLElement>();

const md = markdownit();

const { t } = useI18n();

const fuseListData = ref<FuseListItem[]>([]);

const siteConfig = useSiteConfig();
const keys = computed(() => {
  const ks = siteConfig.value.fuse.options.keys || [];
  return ks.length === 0 ? ["title", "tags", "categories", "excerpt"] : ks;
});

const input = ref("");
// const searchTime = ref(0);
// let startTime: number;

const useFuseOptions = computed<UseFuseOptions<FuseListItem>>(() => ({
  fuseOptions: {
    includeMatches: true,
    findAllMatches: true,

    ...siteConfig.value.fuse.options,
    keys: keys.value,
  },
}));
const { results } = useFuse(input, fuseListData, useFuseOptions);

const searchInputRef = ref<HTMLInputElement>();

watch(
  () => input.value,
  async () => {
    const fuseListDataPath = siteConfig.value.fuse.dataPath.startsWith("http")
      ? siteConfig.value.fuse.dataPath
      : `${import.meta.env.BASE_URL}${siteConfig.value.fuse.dataPath}`;
    fetch(fuseListDataPath)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) fuseListData.value = data;

        searchInputRef.value?.focus();
      });
  }
);
</script>

<template>
  <div
    ref="searchContainer"
    class="flex-center pointer-events-auto"
    flex="col"
    justify="start"
  >
    <div class="flex-center has-icons-left" w="full">
      <span class="icon i-ri-search-line mr-4"></span>
      <input
        ref="searchInputRef"
        v-model="input"
        class="input"
        :placeholder="t('search.placeholder')"
      />
    </div>
    <div v-if="input" class="flex-center" w="full" py="4">
      {{ t("search.hits", results.length || 0) }} <!--  - {{ t("search.time", { searchTime }) }} -->
    </div>
    <div v-else py="4">
      {{ t("search.tip") }}
    </div>
    <div v-if="results.length > 0" overflow="auto" w="full">
      <div v-for="result in results" w="full">
        <div class="media">
          <div class="media-content lg:m-2 break-words">
            <hr />
            <AppLink :key="result.item.title" :to="result.item.link">
              <p class="font-semibold">
                {{ result.item.title }}
              </p>
            </AppLink>
            <span
              text="sm"
              opacity="80"
              v-html="md.render(result.item.excerpt)"
            >
            </span>
            <span text-xs opacity-50> Score Index: {{ result.refIndex }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
