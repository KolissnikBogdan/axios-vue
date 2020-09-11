import {api} from '@/apis/config';

const endPoint = 'posts';

export default {
  state: {
    posts: []
  },

  getters: {
    postsList: state => state.posts
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    }
  },

  actions: {
    async loadPosts({commit}) {
      let response = await api.get(endPoint);
      commit('SET_POSTS', response.data);
    }
  }
};