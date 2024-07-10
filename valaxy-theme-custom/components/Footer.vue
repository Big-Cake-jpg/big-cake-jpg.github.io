<script setup lang="ts">
import { useSiteConfig } from 'valaxy'
import { useThemeConfig } from '../composables';
import { onMounted, ref } from 'vue';

const siteConfig = useSiteConfig();
const themeConfig = useThemeConfig();
const hitokoto = ref('');

onMounted(async () => {
  const response = await fetch('https://v1.hitokoto.cn');
  const data = await response.json();
  hitokoto.value = data.hitokoto;
});
</script>

<template>
    <footer class="footer m-auto">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="text-center lg:text-left">
                    <p><a href="https://beian.miit.gov.cn" target="_blank">晋 ICP 备 2024031556 号 - 1</a> · <a href="https://icp.gov.moe/?keyword=20230105" target="_blank">萌 ICP 备 20230105 号</a></p>
                    <p>Copyright © {{ themeConfig.footer.since }} - {{ new
                    Date().getFullYear() }} <a href="/">{{ siteConfig.title }}</a></p>
                    <p>{{ hitokoto }}</p>
                </div>
                <div class="text-center lg:text-right">
                    <p>Built with <a href="https://valaxy.site">Valaxy</a> by SliverRiver</p>
                    <p>Customized by Big_Cake</p>
                </div>
            </div>
        </div>
    </footer>
</template>