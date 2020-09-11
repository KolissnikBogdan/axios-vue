<template>
  <v-footer app>
    <v-spacer></v-spacer>
    <span>&copy; Axios App - {{ data }}</span>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script>
import moment from 'moment';

export default {
  name: "Footer",
  data() {
    return {
      data: moment(new Date()).format('YYYY-MM-DD [at] hh:mm')
    }
  }
}
</script>

<style scoped>

</style>
