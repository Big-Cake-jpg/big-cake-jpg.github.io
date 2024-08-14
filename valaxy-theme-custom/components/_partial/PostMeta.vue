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
      <span>{{ frontmatter.wordCount }} 字</span>
    </span>

    <span
      v-if="frontmatter.readingTime"
      class="inline-flex-center"
      :title="t('statistics.time')"
    >
      <span m="x-2">-</span>
      <time>{{ frontmatter.readingTime }} 分钟读完</time>
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
