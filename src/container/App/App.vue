<template>
  <v-app id="inspire">
    <Navigation :drawer="drawer"/>
    <v-app-bar
        fixed
        app
        clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-layout
          justify-space-between
          align-center>
        <v-toolbar-title>Axios App</v-toolbar-title>
        <v-switch v-model="switchTheme" :label="themeLabel" color="dark" class="mt-6"></v-switch>
      </v-layout>
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
      switchTheme: true,
      drawer: false
    };
  },
  computed: {
    themeLabel() {
      return this.switchTheme ? 'Dark Theme' : 'Light Theme';
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  watch: {
    switchTheme() {
      this.$vuetify.theme.dark = this.switchTheme;
    }
  }
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
