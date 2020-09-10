import {api} from '@/apis/config';

const endPoint = 'posts';

const state = {
  posts: []
};

const getters = {};

const mutations = {
  SET_POSTS(state, data) {
    state.posts = data;
  }
};

const actions = {
  async loadPosts({commit}) {
    await api.get(endPoint)
    .then(res => {
      commit('SET_POSTS', res.data);
      return res;
    })
    .catch(error => console.log(error));
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

