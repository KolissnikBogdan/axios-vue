import Vue from 'vue';
import Vuex from 'vuex';
import posts from '@/store/modules/posts';
import comments from '@/store/modules/comments';
import albums from '@/store/modules/albums';
import photos from '@/store/modules/photos';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    namespaced: true,
    posts,
    comments,
    albums,
    photos
  }
});
