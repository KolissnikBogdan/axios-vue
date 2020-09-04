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

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="productItem in albums"
                :key="productItem.id">
          <GridAlbums :album="productItem"/>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import GridAlbums from "@/container/Albums/GridAlbums/GridAlbums";

export default {
  name: 'Albums',
  data() {
    return {
      loading: true,
      errored: false
    }
  },
  components: {
    GridAlbums
  },
  computed: {
    ...mapState('albums', ['albums'])
  },
  mounted() {
    this.loadAlbums()
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
  },
  methods: {
    ...mapActions("albums", ["loadAlbums"])
  }
}
</script>
