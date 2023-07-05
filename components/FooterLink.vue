<template>
  <div class="blog-list">
    <ul v-if="!loading">
      <li v-for="blog in blogs" :key="blog.id">
        <a target="_blank" :href="blog.url">{{ blog.blog }}</a>
      </li>
    </ul>
    <p v-else>正在获取友链...</p>
  </div>
</template>
<script>
import axios from "axios";

// a function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default {
  name: "BlogList",
  data() {
    return {
      blogs: [],
      loading: true, // add a loading property
    };
  },
  mounted() {
    // change the url to your own
    axios.get("https://api.lihaoyu.cn/api/blog/links").then((response) => {
      this.blogs = shuffle(response.data); // shuffle the data
      this.loading = false; // set loading to false after getting the data
    });
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
