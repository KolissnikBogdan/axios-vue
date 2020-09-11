<template>
  <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="limit"
  >
    <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
    />
  </div>
</template>

<script>
import PostCard from '@/container/Posts/PostsCard';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'InfiniteScroll',
  data() {
    return {
      posts: [],
      limit: 10,
      busy: false
    };
  },
  computed: {
    ...mapGetters(['postsList'])
  },
  components: {
    PostCard
  },
  async created() {
    await this.loadPosts();
  },
  methods: {
    async loadMore() {
      await this.loadPosts();
      this.busy = true;

      const append = this.postsList.slice(this.posts.length, this.posts.length + this.limit);
      this.posts = [...this.posts, ...append];

      this.busy = false;
    },
    ...mapActions(['loadPosts'])
  }
};

</script>

<style scoped>

</style>