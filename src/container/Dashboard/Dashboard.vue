<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="6">
        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="dateFormatted"
                label="Date"
                persistent-hint
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu = false"></v-date-picker>
        </v-menu>
        <p>Formatted date with Moment.js: <strong>{{ date | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</strong></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'

export default {
  name: "Dashboard",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu: false
    }
  },

  watch: {
    date () {
      this.dateFormatted = this.formatDate(this.date)
    },
  },

  methods: {
    formatDate (date) {
      if (!date) return null

      return moment(date).format('YYYY-MM-DD [at] hh:mm')
    }
  },
}
</script>

<style scoped>

</style>
