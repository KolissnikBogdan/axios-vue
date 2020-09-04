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
// import {mapActions} from "vuex";
import {api} from "@/apis/config";

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
    // try {
    //   this.photo = this.loadPhoto(this.album.id)
    // } catch (error) {
    //   console.log(error);
    //   this.errored = true;
    // } finally {
    //   this.loading = false
    // }
  },
  methods: {
    loadMore(id) {
      api.get(`photos?albumId=${id}`).then(response => {
        this.photo = response.data[0].thumbnailUrl;
      });
    }
    // ...mapActions("photos", ["loadPhoto"])
  }
}
</script>

<style scoped>

</style>
