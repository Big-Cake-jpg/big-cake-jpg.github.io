<template>
  <div class="menu">
    <ul class="menu-list">
      <li v-for="page in themeConfig.asidePages">
        <AppLink
          class="menu-item"
          v-if="page.url"
          :to="page.url"
          :aria-label="page.name"
        >
          {{ page.name }}
        </AppLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from "../../composables";

const themeConfig = useThemeConfig();
</script>
