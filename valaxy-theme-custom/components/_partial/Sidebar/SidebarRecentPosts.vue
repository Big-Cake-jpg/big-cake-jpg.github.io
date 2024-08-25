<template>
    <div class="card">
        <div class="p-4">
            <div class="mb-3 text-sm">{{ t("sidebar.recent_posts") }}</div>
            <RecentPosts />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>