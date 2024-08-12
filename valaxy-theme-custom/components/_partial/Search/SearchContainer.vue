<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

const siteConfig = useSiteConfig()

const isAlgolia = computed(() => siteConfig.value.search.type === 'algolia')
const isFuse = computed(() => siteConfig.value.search.type === 'fuse')

function handleSearchHotKey(event: KeyboardEvent) {
  if (
    (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey))
  ) {
    event.preventDefault()
  }
}

const algoliaRef = ref()
onMounted(() => {
  // algolia has its own hotkey
  if (isFuse.value)
    useEventListener('keydown', handleSearchHotKey)
})

const AlgoliaSearch = isAlgolia.value
  ? defineAsyncComponent(() => import('./AlgoliaSearch.vue'))
  : () => null
</script>

<template>
  <p class="text-2xl">搜索</p>
  <AlgoliaSearch v-if="isAlgolia" ref="algoliaRef" />
  <FuseSearch v-else-if="isFuse" />
</template>