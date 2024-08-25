<script setup lang="ts">
import { useSiteConfig } from "valaxy";
import { useThemeConfig } from "../composables";
import { onMounted, ref } from "vue";

const siteConfig = useSiteConfig();
const themeConfig = useThemeConfig();
const hitokoto = ref("");

onMounted(async () => {
  if (themeConfig.value.footer.hitokoto?.enable) {
    const res = await fetch("https://v1.hitokoto.cn");
    const data = await res.json();
    hitokoto.value = data.hitokoto;
  }
});
</script>

<template>
  <footer class="footer m-auto">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="text-center lg:text-left">
          <p>
            <template v-if="themeConfig.footer.beian">
              <template v-if="themeConfig.footer.beian.icp?.enable">
                <a href="https://beian.miit.gov.cn" target="_blank">{{ themeConfig.footer.beian.icp.info }}</a>
              </template>
              <template v-if="themeConfig.footer.beian.icp?.enable && (themeConfig.footer.beian.gongan?.enable || themeConfig.footer.beian.moe?.enable)">
                ·
              </template>
              <template v-if="themeConfig.footer.beian.gongan?.enable">
                <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode={{ themeConfig.footer.beian.gongan.recordCode }}" target="_blank">{{ themeConfig.footer.beian.gongan.info }}</a>
              </template>
              <template v-if="themeConfig.footer.beian.gongan?.enable && themeConfig.footer.beian.moe?.enable">
                ·
              </template>
              <template v-if="themeConfig.footer.beian.moe?.enable">
                <a href="https://icp.gov.moe/?keyword={{ themeConfig.footer.beian.moe.info }}" target="_blank">萌 ICP 备 {{ themeConfig.footer.beian.moe.info }} 号</a>
              </template>
            </template>
          </p>
          <p>
            Copyright © {{ themeConfig.footer.since }} -
            {{ new Date().getFullYear() }}
            <a href="/">{{ siteConfig.title }}</a>
          </p>
          <p v-if="themeConfig.footer.hitokoto?.enable">{{ hitokoto }}</p>
        </div>
        <div class="text-center lg:text-right">
          <p>
            Built with <a href="https://valaxy.site">Valaxy</a> by SliverRiver
          </p>
          <p>Customized by Big_Cake</p>
        </div>
      </div>
    </div>
  </footer>
</template>
