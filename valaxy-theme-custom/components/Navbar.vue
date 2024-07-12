<script setup lang="ts">
import { useSiteConfig, useAppStore, useLocale } from "valaxy";
import { useThemeConfig } from "../composables";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const { toggleLocales } = useLocale();
const siteConfig = useSiteConfig();
const themeConfig = useThemeConfig();
const appStore = useAppStore();
const toggleDark = () => appStore.toggleDark();
</script>

<template>
  <div class="navbar-container">
    <div class="navbar max-w-7xl mx-auto">
      <div class="navbar-brand flex justify-center lg:justify-left">
        <RouterLink class="navbar-item" to="/">
          <img
            :src="siteConfig.favicon"
            width="28"
            height="28"
            alt="Site favicon"
          />
          <div class="ml-2 font-medium">{{ siteConfig.title }}</div>
        </RouterLink>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <RouterLink class="navbar-item" to="/" aria-label="Site Index">
            首页
          </RouterLink>
          <span class="flex flex-row" v-for="page in themeConfig.pages">
            <AppLink
              class="navbar-item"
              v-if="page.url"
              :to="page.url"
              :aria-label="page.name"
            >
              {{ page.name }}
            </AppLink>
          </span>
        </div>
        <div class="navbar-end">
          <span class="flex flex-row" v-for="item in themeConfig.quickAccess">
            <a
              class="navbar-item"
              :href="item.url"
              :aria-label="item.name"
              target="_blank"
            >
              <span class="icon text-xl" :class="item.icon" />
            </a>
          </span>
          <a
            class="navbar-item"
            href="https://www.travellings.cn/go.html"
            aria-label="开往"
            target="_blank"
          >
            <span class="icon text-xl i-fluent-vehicle-subway-24-regular" />
          </a>
          <button
            class="navbar-item"
            :title="t('button.toggle_langs')"
            @click="toggleLocales"
            aria-label="Switch locale"
          >
            <div
              class="icon text-xl i-ri-translate transition transform"
              :class="locale === 'en' ? 'rotate-y-180' : ''"
            />
          </button>
          <button
            class="navbar-item"
            @click="toggleDark"
            aria-label="Switch theme"
          >
            <div class="icon text-xl i-ri-contrast-2-line" />
          </button>
        </div>
      </div>
      <div class="flex justify-center overflow-auto lg:hidden">
        <RouterLink class="navbar-item" to="/" aria-label="Site Index">
          首页
        </RouterLink>
        <span class="flex flex-row" v-for="page in themeConfig.pages">
          <AppLink
            class="navbar-item"
            v-if="page.url"
            :to="page.url"
            :aria-label="page.name"
          >
            {{ page.name }}
          </AppLink>
        </span>

        <span class="flex flex-row" v-for="item in themeConfig.quickAccess">
          <AppLink class="navbar-item" :href="item.url" :aria-label="item.name">
            <div class="icon text-xl" :class="item.icon" />
          </AppLink>
        </span>
        <a
          class="navbar-item"
          href="https://www.travellings.cn/go.html"
          aria-label="开往"
          target="_blank"
        >
          <span class="icon text-xl i-fluent-vehicle-subway-24-regular" />
        </a>
        <button
          class="navbar-item"
          :title="t('button.toggle_langs')"
          @click="toggleLocales"
          aria-label="Switch locale"
        >
          <div
            class="icon text-xl i-ri-translate transition transform"
            :class="locale === 'en' ? 'rotate-y-180' : ''"
          />
        </button>
        <button
          class="navbar-item"
          @click="toggleDark"
          aria-label="Switch theme"
        >
          <div class="icon text-xl i-ri-contrast-2-line" />
        </button>
      </div>
    </div>
  </div>
</template>
