import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './container/App/App.vue'
import router from './router'
import index from './store'

Vue.config.productionTip = false

let infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)

Vue.use(require('vue-moment'))

new Vue({
    vuetify,
    router,
    store: index,
    render: h => h(App)
}).$mount('#app')
