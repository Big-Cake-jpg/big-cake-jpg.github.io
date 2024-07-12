<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  /**
   * Cur Page Number
   */
  curPage: number;
  /**
   * Total Pages
   */
  total: number;
  /**
   * Page Size
   */
  pageSize: number;
}>();

const emit = defineEmits(["pageChange"]);

const totalPages = computed(() => Math.ceil(props.total / props.pageSize));

/**
 * 围绕的长度
 */
const surLen = computed(() => {
  if (props.curPage === 1 || props.curPage === totalPages.value) return 3;
  else return 2;
});

function showPage(i: number) {
  if (i === 1) return true;
  else if (i === totalPages.value) return true;
  return i > props.curPage - surLen.value && i < props.curPage + surLen.value;
}

function jumpTo(page: number) {
  emit("pageChange", page);
  if (page === 1) return "/";
  else return `/page/${page}`;
}
</script>

<template>
  <div class="mx-auto max-w-lg mb-4">
    <nav role="navigation" aria-label="pagination">
      <div class="buttons gap-2 flex justify-between">
        <ul>
          <li v-if="curPage !== 1">
            <RouterLink
              :to="jumpTo(curPage - 1)"
              class="button"
              aria-label="To previous page"
            >
              <div class="i-ic-baseline-arrow-back" />
            </RouterLink>
          </li>
          <li v-else>
            <button class="button" disabled aria-label="To previous page">
              <div class="i-ic-baseline-arrow-back" />
            </button>
          </li>
        </ul>
        <ul class="hidden md:contents" v-for="i in totalPages">
          <li v-if="showPage(i)" :key="i">
            <RouterLink
              aria-label="To page"
              :to="jumpTo(i)"
              class="button"
              :class="curPage === i && 'is-link'"
              >{{ i }}</RouterLink
            >
          </li>
          <li
            v-else-if="i === curPage - surLen"
            class="mx-4"
            :key="`prev-space-${i}`"
          >
            ...
          </li>
          <li
            v-else-if="i === curPage + surLen"
            class="mx-4"
            :key="`next-space-${i}`"
          >
            ...
          </li>
        </ul>
        <span class="contents md:hidden">
          <p class="text-center">{{ curPage }} / {{ totalPages }}</p>
        </span>

        <ul>
          <li v-if="curPage !== totalPages">
            <RouterLink
              :to="jumpTo(curPage + 1)"
              class="button"
              aria-label="To next page"
            >
              <div class="i-ic-baseline-arrow-forward" />
            </RouterLink>
          </li>
          <li v-else>
            <button class="button" disabled aria-label="To next page">
              <div class="i-ic-baseline-arrow-forward" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
