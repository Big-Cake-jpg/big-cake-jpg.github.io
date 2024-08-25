<template>
  <div class="card" v-if="siteConfig.sponsor.enable">
    <div class="card-content">
      <div class="content">
        <p class="text-center">{{ siteConfig.sponsor.description }}</p>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          <a
            target="_blank"
            v-for="methods in siteConfig.sponsor.methods"
            :style="{ backgroundColor: methods.color }"
            class="button is-link hover:brightness-110 transition duration-300 ease-in-out"
            :href="methods.url"
          >
            <span :class="methods.icon"></span>&nbsp;{{ methods.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useSiteConfig } from "valaxy";

const siteConfig = useSiteConfig();
</script>
