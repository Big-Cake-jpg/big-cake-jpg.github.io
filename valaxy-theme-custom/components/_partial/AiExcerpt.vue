<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { useI18n } from 'vue-i18n'

const fm = useFrontmatter()
const { t } = useI18n()
</script>

<template>
  <div class="ai-generated-excerpt rounded-lg p-4 border-gray-500 text-[var(--bulma-card-color)] bg-[var(--bulma-background)]">
    <div font="black" class="flex items-center">
      <div mr-1 i-ri-robot-2-line />
      <div>
        {{ t('excerpt.ai') }}
      </div>
    </div>
    <div op="90" class="mt-1 bg-[var(--bulma-card-background-color)] border-gray-500 p-2 rounded-lg">
      {{ fm.excerpt }}
    </div>
  </div>
</template>