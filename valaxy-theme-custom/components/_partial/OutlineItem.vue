<script setup lang="ts">
import type { MenuItem } from "valaxy";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps<{
  headers: MenuItem[];
  onClick: (e: MouseEvent) => void;
  root?: boolean;
}>();

const emit = defineEmits(["close-menu"]);
const activeLink = ref<string | null>(null);

const handleClick = (e: MouseEvent, link: string) => {
  e.preventDefault();
  const anchor = link.slice(1);
  const targetElement = document.querySelector(`[id="${anchor}"]`);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
  emit("close-menu");
};

const observeAnchors = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeLink.value = `#${entry.target.id}`;
        }
      });
    },
    { rootMargin: "0px 0px -80% 0px" } // Adjust the rootMargin as needed
  );

  const anchors = document.querySelectorAll("[id]");
  anchors.forEach((anchor) => observer.observe(anchor));

  return () => {
    anchors.forEach((anchor) => observer.unobserve(anchor));
  };
};

let unobserve: () => void;

onMounted(() => {
  unobserve = observeAnchors();
});

onBeforeUnmount(() => {
  if (unobserve) {
    unobserve();
  }
});

watch(
  () => props.headers,
  () => {
    if (unobserve) {
      unobserve();
    }
    unobserve = observeAnchors();
  },
  { deep: true }
);
</script>

<template>
  <div class="menu">
    <ul :class="root ? 'root' : 'nested'" class="menu-list">
      <li
        v-for="{ children, link, title, lang } in headers"
        :key="link"
        class="mr-1.75"
        :lang="lang || 'zh-CN'"
      >
        <a
          class="outline-link"
          :class="{ 'is-active': activeLink === link }"
          :href="link"
          @click="handleClick($event, link)"
        >
          {{ title }}
        </a>
        <template v-if="children?.length">
          <OutlineItem
            :headers="children"
            @click="handleClick($event, link)"
            @close-menu="$emit('close-menu')"
          />
        </template>
      </li>
    </ul>
  </div>
</template>
