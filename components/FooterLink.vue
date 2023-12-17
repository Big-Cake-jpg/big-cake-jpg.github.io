<template>
  <div class="blog-list">
    <ul v-if="!loading && !error">
      <li v-for="blog in blogs" :key="blog.id">
        <a target="_blank" :href="blog.url">{{ blog.blog }}</a>
      </li>
    </ul>
    <p v-if="error">出现错误：{{ error }}</p>
    <p v-else-if="loading">正在获取友链...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogs: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://api.lihaoyu.cn/blog/links/global"
      );
      this.blogs = this.shuffle(response.data);
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
  },
};
</script>
<style scoped>
.blog-list {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
}

a {
  margin: 0 5px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  max-width: 500px; /* you can adjust this value as needed */
  justify-content: space-between;
}
</style>
