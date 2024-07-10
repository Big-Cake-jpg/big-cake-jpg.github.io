<script setup lang="ts">
import { useOutline } from 'valaxy';

const { headers, handleClick } = useOutline()
</script>

<template>
    <div class="card">
        <div class="card-content">
            <div class="mb-3 text-sm">目录</div>
            <div class="max-h-38 overflow-y-auto">
                <OutlineItem :headers="headers" :on-click="handleClick" root />
            </div>
        </div>
    </div>
</template>