<template>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">
      <v-layout class="justify-center py-2">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </v-layout>
    </div>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex
            xs12
            sm6
            md3
            v-for="productItem in visiblePages"
            :key="productItem.id">
          <Album :album="productItem"/>
        </v-flex>
      </v-layout>
      <v-pagination
          v-model="page"
          class="my-4"
          circle
          :length="paginationLength"
          :total-visible="7"
      ></v-pagination>
      <v-fab-transition>
        <v-btn
            class="v-btn"
            @click="scrollTop"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-container>
  </section>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Album from '@/container/Albums/AlbumsColect';

export default {
  name: 'Albums',
  data() {
    return {
      page: 1,
      perPage: 12,
      loading: true,
      errored: false
    };
  },

  components: {
    Album
  },

  computed: {
    ...mapGetters(['albumsList']),
    visiblePages() {
      return this.albumsList && this.albumsList.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    paginationLength() {
      return Math.ceil(this.albumsList && this.albumsList.length / this.perPage);
    }
  },

  async created() {
    this.loading = true;
    await this.loadAlbums()
    .catch(errors => {
      console.log(errors);
      this.errored = true;
    })
    .finally(this.loading = false);
  },

  methods: {
    ...mapActions(['loadAlbums']),

    scrollTop() {
      window.scrollTo(0, 0)
    }
  }
};
</script>

<style scoped>
.v-btn {
  position: fixed;
  bottom: 100px;
  right: 0;
  margin-right: 50px;
}
</style>
