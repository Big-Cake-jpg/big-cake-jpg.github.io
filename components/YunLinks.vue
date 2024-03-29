<script lang="ts" setup>
import { useRandomData } from "../node_modules/valaxy-theme-yun/composables";
import { onImgError } from "../node_modules/valaxy-theme-yun/utils";
import { defineProps, computed } from "vue";

interface LinkType {
  avatar: string;
  name: string;
  url: string;
  color: string;
  blog: string;
  desc: string;
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

function onError(e: Event) {
  onImgError(e, props.errorImg);
}

const totalLinks = computed(() => data.value?.length || 0);
</script>

<template>
  <div class="links">
    <div class="total-links">友链总数量: <span class=links-number>{{ totalLinks }}</span></div>
    <ul class="link-items">
      <li
        v-for="(link, i) in data"
        :key="i"
        class="link-item"
        :style="`--primary-color: ${link.color}`"
      >
        <a
          class="link-url"
          p="x-4 y-2"
          :href="link.url"
          :title="link.name"
          alt="portrait"
          rel="friend"
          target="_blank"
        >
          <div class="link-left">
            <img
              class="link-avatar"
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
          <div class="link-info" m="l-2">
            <div class="link-blog" font="serif black">{{ link.blog }}</div>
            <div class="link-desc">{{ link.desc }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.links {
  .link-items {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;

    padding-left: 0;
  }

  .link-url {
    --smc-link-color: var(--primary-color);

    display: inline-flex;
    text-align: center;
    justify-self: center;
    line-height: 1.5;
    margin: 0.5rem;
    transition: 0.2s;
    color: var(--primary-color, black);
    border: 1px solid var(--primary-color, gray);

    &:hover {
      color: white;
      background-color: var(--primary-color, gray);
      box-shadow: 0 2px 20px var(--primary-color, gray);
    }

    .link {
      &-left {
        line-height: 0;
      }

      &-avatar {
        margin: 0;
        display: inline-flex;
        max-width: 100%;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid var(--primary-color, gray);
        transition: 0.5s;

        &:hover {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
      }

      &-desc {
        font-size: 0.8rem;
        width: 10rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  .link-info {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }
}

li {
  list-style-type: none;
}

.total-links {
  margin-bottom: 1rem;
  text-align: center;
  .links-number {
    font-family: var(--smc-font-serif);
  }
}
</style>
