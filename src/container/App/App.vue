<template>
  <v-app id="inspire">
    <Navigation :drawer="drawer"/>
    <v-app-bar
        fixed
        app
        clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Axios App</v-toolbar-title>
    </v-app-bar>
    <v-main
        class="fill-height"
        fluid
    >
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Navigation from '@/components/SideMenu/SideMenu';
import Footer from '@/components/Footer/Footer';

export default {
  components: {
    Footer,
    Navigation
  },
  data() {
    return {
      drawer: false
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
