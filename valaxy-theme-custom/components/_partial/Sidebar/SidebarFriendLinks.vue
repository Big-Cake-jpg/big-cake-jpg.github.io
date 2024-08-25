<template>
    <div class="card">
        <div class="p-4">
            <div class="mb-3 text-sm">{{ t("aside.global_friend_links") }}</div>
            <div class="max-h-fit overflow-y-auto">
                <GlobalFriendLinks />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>