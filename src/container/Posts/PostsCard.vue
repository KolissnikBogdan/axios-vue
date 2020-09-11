<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card
            class="mx-auto"
        >
          <v-dialog
              v-model="dialog"
              width="600"
          >
            <template v-slot:activator="{ on }">
              <v-card-text v-on="on">
                <p class="text-h6 text--primary">
                  {{ post.title }}
                </p>
                <div class="text--primary">
                  {{ post.body }}
                </div>
              </v-card-text>
            </template>
            <InfiniteScroll :post="post"/>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InfiniteScroll from '@/components/InfiniteScroll/InfiniteScroll';

export default {
  name: 'PostCard',
  components: {
    InfiniteScroll
  },
  props: {
    post: {
      type: Object
    }
  },
  data() {
    return {
      dialog: false
    }
  }
};
</script>

<style scoped>

</style>
