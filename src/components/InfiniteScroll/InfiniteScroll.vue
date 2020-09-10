<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
    <PostCard
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
    />
  </div>
</template>

<script>
import PostCard from "@/container/Posts/PostsCard";
import { api } from "@/apis/config";

export default {
  name: "InfiniteScroll",
  data() {
    return {
      posts: [],
      limit: 10,
      busy: false
    }
  },
  components: {
    PostCard
  },
  methods: {
    loadMore() {
      console.log("Adding 10 more data results");
      this.busy = true;
      api.get("/posts").then(response => {
        const append = response.data.slice(
            this.posts.length,
            this.posts.length + this.limit
        );
        this.posts = this.posts.concat(append);
        this.busy = false;
      });
    }
  },
  created() {
    this.loadMore()
  }
}

</script>

<style scoped>

</style>