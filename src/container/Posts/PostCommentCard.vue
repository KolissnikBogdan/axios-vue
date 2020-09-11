<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card
            class="mx-auto"
        >
          <v-card-text>
            <p class="text-h6 text--primary">
              {{ comment.name }}
            </p>
            <div class="text--primary">
              {{ comment.email }}
            </div>
            <div>
              {{ comment.body }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PostCommentCard',
  props: ['comment']
}
</script>

<style scoped>

</style>