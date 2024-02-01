<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import "artalk/dist/Artalk.css";
import Artalk from "artalk";

let artalk: Artalk;

const route = useRoute();

onMounted(() => {
  artalk = Artalk.init({
    el: ".comment",
    pageKey: route.path,
    pageTitle: `${document.title}`,
    server: "https://artalk.lihaoyu.cn",
    site: "晓雨杂记",
    useBackendConf: true,
    locale: "auto",
  });
});

onUnmounted(() => {
  artalk.destroy()
})
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
  .atk-list {
    width: 90%;
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
