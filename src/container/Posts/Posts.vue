<template>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">
      <v-progress-circular
          indeterminate
          color="primary"
      ></v-progress-circular>
    </div>

    <PostCard
        v-else
        v-for="(post, index) in posts"
        v-bind:post="post"
        v-bind:index="index"
        v-bind:key="post.id"
    ></PostCard>
  </section>
</template>

<script>
import PostCard from "@/container/Posts/PostCard/PostCard";
import {mapState, mapActions} from "vuex";

export default {
  name: 'Posts',
  data() {
    return {
      loading: true,
      errored: false
    }
  },
  components: {
    PostCard
  },
  computed: {
    ...mapState("posts", ["posts"])
  },
  mounted() {
    this.loadPosts()
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
  },
  methods: {
    ...mapActions("posts", ["loadPosts"])
  }
}
</script>
