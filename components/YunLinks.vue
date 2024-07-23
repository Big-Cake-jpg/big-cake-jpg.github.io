<script lang="ts" setup>
import { useRandomData } from "../valaxy-theme-custom/composables/helper";
import { onImgError } from "../valaxy-theme-custom/utils/index";
import { computed } from "vue";

interface LinkType {
  avatar: string;
  name: string;
  url: string;
  color: string;
  blog: string;
  desc: string;
  healthy: boolean;
}

const props = defineProps<{
  links: string | LinkType[];
  random: boolean;
  /**
   * @description: 图片加载失败时显示的图片
   */
  errorImg?: string;
}>();

const { data } = useRandomData(props.links, props.random);

const filteredData = computed(() => data.value?.filter(link => link.healthy !== false) || []);

function onError(e: Event) {
  onImgError(e, props.errorImg);
}

const totalLinks = computed(() => filteredData.value?.length || 0);
</script>

<template>
  <div class="links">
    <div class="m-4 text-center">友链总数量: <span>{{ totalLinks }}</span></div>
    <ul class="flex text-center justify-center flex-wrap pl-0">
      <li
        v-for="(link, i) in filteredData"
        :key="i"
        class="link-item list-none"
        :style="`--primary-color: ${link.color}`"
      >
        <a
          class="link-url inline-flex text-center justify-self-center leading-normal m-2"
          p="x-4 y-2"
          :href="link.url"
          :title="link.name"
          alt="portrait"
          rel="friend"
          target="_blank"
        >
          <div class="link-left leading-0">
            <img
              class="link-avatar m-0 inline-flex max-w-100% rounded-full bg-white"
              width="64"
              height="64"
              w="16"
              h="16"
              loading="lazy"
              :src="link.avatar"
              :alt="link.name"
              @error="onError"
            />
          </div>
          <div class="link-info inline-flex flex-col justify-center" m="l-2">
            <div class="link-blog" font="black">{{ link.blog }}</div>
            <div class="text-0.8rem w-40 whitespace-nowrap text-ellipsis overflow-hidden">{{ link.desc }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.links {

  .link-url {
    --smc-link-color: var(--primary-color);
    transition: 0.2s;
    color: var(--primary-color, black);
    border: 1px solid var(--primary-color, gray);

    &:hover {
      color: white;
      background-color: var(--primary-color, gray);
      box-shadow: 0 2px 20px var(--primary-color, gray);
    }

    .link {
      &-avatar {
        border: 1px solid var(--primary-color, gray);
        transition: 0.5s;
        &:hover {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}

li {
  margin-top: 0 !important;
}

ul {
  margin-left: 0 !important;
}
</style>
