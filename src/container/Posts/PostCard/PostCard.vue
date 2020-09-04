<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card
            class="mx-auto"
        >
          <v-card-text>
            <p class="text-h6 text--primary">
              {{post.title}}
            </p>
            <div class="text--primary">
              {{post.body}}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PostCard",
  props: ['post']
}
</script>

<style scoped>

</style>
