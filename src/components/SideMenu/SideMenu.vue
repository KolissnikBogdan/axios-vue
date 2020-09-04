<template>
  <v-navigation-drawer
      v-model="isSelectedChild"
      app
      fixed
      clipped
  >
    <v-list dense>
      <v-list-item link to="/">
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/albums">
        <v-list-item-action>
          <v-icon>mdi-camera-image</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Albums</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/posts">
        <v-list-item-action>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Posts</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: "Navigation",
  props: ['drawer'],
  data() {
    return {
      isSelectedChild: this.drawer
    }
  },
  watch: {
    drawer: function() {
      this.isSelectedChild = !this.isSelectedChild
    }
  }
}
</script>

<style scoped>

</style>
