<script setup lang="ts">
import type { MenuItem } from "valaxy";

defineProps<{
  headers: MenuItem[];
  onClick: (e: MouseEvent) => void;
  root?: boolean;
}>();

const handleClick = (e: MouseEvent, link: string) => {
  e.preventDefault();
  const anchor = link.slice(1);
  const targetElement = document.querySelector(`[id="${anchor}"]`);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <div class="menu">
    <ul :class="root ? 'root' : 'nested'" class="toc menu-list">
      <li
        v-for="{ children, link, title, lang } in headers"
        :key="link"
        class="va-toc-item"
        :lang="lang || 'zh-CN'"
      >
        <a class="outline-link" :href="link" @click="handleClick($event, link)">
          {{ title }}
        </a>
        <template v-if="children?.length">
          <OutlineItem :headers="children" :on-click="onClick" />
        </template>
      </li>
    </ul>
  </div>
</template>
