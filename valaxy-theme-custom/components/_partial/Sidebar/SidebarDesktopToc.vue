<script setup lang="ts">
import { useOutline } from 'valaxy';
import { useI18n } from "vue-i18n";

const { headers, handleClick } = useOutline()
const { t } = useI18n();
</script>

<template>
    <div class="card !mb-0">
        <div class="p-4">
            <div class="mb-3 text-sm">{{ t("aside.toc") }}</div>
            <div class="max-h-38 overflow-y-auto">
                <OutlineItem :headers="headers" :on-click="handleClick" root />
            </div>
        </div>
    </div>
</template>