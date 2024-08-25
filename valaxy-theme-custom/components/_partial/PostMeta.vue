<template>
  <div
    v-if="siteConfig.statistics.enable"
    class="flex items-center text-base"
    mt="2"
  >
    <span
      v-if="frontmatter.wordCount"
      class="inline-flex-center"
      :title="t('statistics.word')"
    >
      <span>{{ t("statistics.words", { wordCount: frontmatter.wordCount }) }}</span>
    </span>

    <span
      v-if="frontmatter.readingTime"
      class="inline-flex-center"
      :title="t('statistics.time')"
    >
      <span m="x-2">-</span>
      <time>{{ t("statistics.reading_time", { readingTime: frontmatter.readingTime }) }}</time>
    </span>
  </div>
</template>
<script setup lang="ts">
import { useFrontmatter, useSiteConfig } from "valaxy";
import { useI18n } from "vue-i18n";

const frontmatter = useFrontmatter();
const siteConfig = useSiteConfig();
const { t } = useI18n();
</script>
