<template>
  <v-card flat class="ma-3 text-xs-center">
    <v-img :src="photo"></v-img>
    <v-card-title primary-title class="justify-center">
      <div>
        <h3 class="headline text--accent-5">{{ album.title }}</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
import { api } from "@/apis/config";

export default {
  name: "GridAlbums",
  props: ['album'],
  data() {
    return {
      loading: true,
      errored: false,
      photo: null
    }
  },
  mounted() {
    this.loadMore(this.album.id)
  },
  methods: {
    async loadMore(id) {
      await api.get(`photos?albumId=${id}`).then(response => {
        this.photo = response.data[0].thumbnailUrl;
      });
    }
  }
}
</script>

<style scoped>

</style>
