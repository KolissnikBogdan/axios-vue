<template>
  <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="limit"
  >
    <PostCommentCard
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"/>
  </div>
</template>

<script>
import PostCommentCard from '@/container/Posts/PostCommentCard';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'InfiniteScroll',
  props: ['post'],
  data() {
    return {
      comments: [],
      limit: 4,
      busy: false
    };
  },
  computed: {
    ...mapGetters(['commentsList'])
  },
  components: {
    PostCommentCard
  },
  async created() {
    await this.loadCommentsById(this.post.id);
  },
  methods: {
    async loadMore() {
      await this.loadCommentsById(this.post.id);
      this.busy = true;

      const append = this.commentsList.slice(this.comments.length, this.comments.length + this.limit);
      this.comments = [...this.comments, ...append];

      this.busy = false;
    },
    ...mapActions(['loadCommentsById'])
  }
};

</script>

<style scoped>

</style>