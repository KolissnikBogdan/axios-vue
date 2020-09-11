<template>
  <v-container>
    <v-row justify="center">
      <PostCard
          v-for="post in visiblePages"
          :key="post.id"
          :post="post"
      />
    </v-row>
    <v-pagination
        v-model="page"
        class="my-4"
        circle
        :length="paginationLength"
        :total-visible="7"
    ></v-pagination>
  </v-container>
</template>

<script>
import PostCard from '@/container/Posts/PostsCard';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Posts',
  components: {
    PostCard
  },
  data() {
    return {
      page: 1,
      perPage: 5,
    }
  },
  computed: {
    ...mapGetters(['postsList']),
    visiblePages() {
      return this.postsList && this.postsList.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    paginationLength() {
      return Math.ceil(this.postsList && this.postsList.length / this.perPage);
    }
  },
  async created() {
    await this.loadPosts();
  },
  methods: {
    ...mapActions(['loadPosts'])
  }
};
</script>