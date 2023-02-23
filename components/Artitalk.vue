<script>
import { useScriptTag } from "@vueuse/core";
useScriptTag("https://npm.onmicrosoft.cn/artitalk");

export default {
  mounted() {
    function addScript(url) {
      var s = document.createElement("script");
      s.id = "at";
      url.indexOf("appId") == -1 ? (s.src = url) : (s.innerHTML = url);
      document.head.appendChild(s);
    }
    addScript(`
        var at = new Artitalk();
        at.init({
            serverURL: 'https://artitalk-api.lihaoyu.cn',
            appId: '114514',
            appKey: '1919810',
            shuoPla: '',
            atEmoji: {
                baiyan: 'https://jsd.onmicrosoft.cn/gh/Artitalk/Artitalk-emoji/baiyan.png',
                bishi: 'https://jsd.onmicrosoft.cn/gh/Artitalk/Artitalk-emoji/bishi.png',
                bizui: 'https://jsd.onmicrosoft.cn/gh/Artitalk/Artitalk-emoji/bizui.png',
                chan: 'https://jsd.onmicrosoft.cn/gh/Artitalk/Artitalk-emoji/chan.png'          
            },
        })
      `);
  },
  destroyed() {
    document
      .querySelectorAll("#at")
      .forEach((element) => element.parentNode.removeChild(element));
    delete window.AV;
  },
};
</script>

<template>
  <div id="artitalk_main" />
</template>
