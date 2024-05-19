<script lang="ts" setup>
import { onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";
import "artalk/dist/Artalk.css";
import Artalk from "artalk";
import { isDark } from 'valaxy'

let artalk: Artalk;

const route = useRoute();

onMounted(() => {
  watch(isDark, (newVal) => {
    if (artalk) {
      artalk.setDarkMode(newVal);
    }
  });

  artalk = Artalk.init({
    el: ".comment",
    pageKey: route.path,
    pageTitle: `${document.title}`,
    server: "https://artalk.lihaoyu.cn",
    site: "晓雨杂记",
    useBackendConf: true,
    locale: "auto",
    darkMode: isDark.value,
  });
});

onBeforeUnmount(() => {
  artalk.destroy();
});
</script>

<template>
  <YunCard w="full" p="4" class="comment yun-comment sm:p-6 lg:px-12 xl:px-16">
    <ClientOnly>
      <div ref="el"></div>
    </ClientOnly>
  </YunCard>
</template>

<style lang="scss">
.comment {
  .atk-list,
  .atk-main-editor {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  ol {
    list-style: decimal;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
