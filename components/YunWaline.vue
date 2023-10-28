<script lang="ts" setup>
import type { WalineInitOptions } from "@waline/client";
import consola from "consola";
import { getEmojis } from "valaxy-addon-waline";

const emoji = getEmojis("https://jsd.onmicrosoft.cn/npm/", [
  "bilibili",
  "bmoji",
  "qq",
  "tieba",
  "weibo",
]);

const customOptions: WalineInitOptions = {
  serverURL: "https://waline.lihaoyu.cn",
  pageview: true,
  comment: true,
  search: false,
  locale: {
    placeholder: "填写邮箱，可以收到回复通知",
  },
  turnstileKey: "0x4AAAAAAALA9mD_xYAnGQhJ",
  imageUploader: (file) => {
    consola.info("Upload file: ", file);

    const formData = new FormData();
    const headers = new Headers();

    formData.append("file", file);
    headers.append(
      "Authorization",
      "Bearer 2|hSxEwvWu6LFKULjxcl6yTZNwOCRTXqC0GaIXFJrt"
    );
    headers.append("Accept", "application/json");
    headers.append("strategy_id", "3");

    return fetch("https://img.lihaoyu.cn/api/v1/upload", {
      method: "POST",
      headers,
      body: formData,
    })
      .then((resp) => resp.json())
      .then((resp) => resp.data.links.url);
  },
};
</script>

<template>
  <WalineClient w="full" :options="customOptions" :emoji="emoji" />
</template>
