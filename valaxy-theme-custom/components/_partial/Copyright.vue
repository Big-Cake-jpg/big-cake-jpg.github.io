<script setup lang="ts">
import { useRoute } from "vue-router";
import { useFrontmatter, useSiteConfig } from "valaxy";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const frontmatter = useFrontmatter();
const route = useRoute();
const siteConfig = useSiteConfig();
const currentRoute = siteConfig.value.url?.slice(0, -1) + route.path;
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
  <div class="notification post-copyright">
    <div class="max-w-xl">
      <div class="mb-3">
        <div class="text-xl">{{ frontmatter.title }}</div>
        <div class="text-sm">
          <a v-bind:href="currentRoute">{{ currentRoute }}</a>
        </div>
      </div>
      <nav class="grid grid-cols-2 md:grid-cols-3 mb-3 gap-3">
        <div>
          <p class="text-sm">{{ t("copyright.author")}}</p>
          <p class="text-base">{{ siteConfig.author.name }}</p>
        </div>
        <div>
          <p class="text-sm">{{ t("copyright.published_on")}}</p>
          <p class="text-base">{{ formatDate(frontmatter.date as Date) }}</p>
        </div>
        <div>
          <p class="text-sm">{{ t("copyright.license")}}</p>
          <p class="text-base">
            <span v-if="frontmatter.license === 'nd'"
              ><a
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"
                >CC BY-NC-ND 4.0</a
              ></span
            >
            <span v-else-if="frontmatter.license === 'disallow'">{{ t("copyright.do_not_repost")}}</span>
            <span v-else
              ><a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                >CC BY-NC-SA 4.0</a
              ></span
            >
          </p>
        </div>
      </nav>
      <div>{{ t("copyright.notice")}}</div>
    </div>
  </div>
</template>
