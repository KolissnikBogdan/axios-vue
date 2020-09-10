<template>
  <v-container>
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
              color="red lighten-2"
              dark
              v-on="on"
          >
            Show posts
          </v-btn>
        </template>
        <InfiniteScroll/>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import InfiniteScroll from '@/components/InfiniteScroll/InfiniteScroll';

export default {
  name: 'Posts',
  components: {
    InfiniteScroll
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>