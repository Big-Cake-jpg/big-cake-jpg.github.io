<template>
    <div class="card" v-if="siteConfig.sponsor.enable">
        <div class="card-content">
            <div class="content">
                <p class="text-center">喜欢这篇文章？能不能考虑一下投喂我（x</p>
                <div class="grid grid-cols-4 justify-items-center">
                    <a target="_blank" v-for="methods in siteConfig.sponsor.methods" :style="{ backgroundColor: methods.color }" class="button is-link" :href="methods.url">
                        <span :class="methods.icon"></span>&nbsp;{{ methods.name }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSiteConfig } from 'valaxy';

const siteConfig = useSiteConfig();
</script>