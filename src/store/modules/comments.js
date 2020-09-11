import {api} from '@/apis/config';

const endPoint = 'comments';

export default {
  state: {
    comments: []
  },

  getters: {
    commentsList: state => state.comments
  },

  mutations: {
    SET_COMMENT(state, comments) {
      state.comments = comments;
    }
  },

  actions: {
    async loadCommentsById({commit}, id) {
      let response = await api.get(`${endPoint}?postId=${id}`);
      commit('SET_COMMENT', response.data);
    }
  }
};