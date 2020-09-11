import {api} from '@/apis/config';

const endPoint = 'albums';

export default {
  state: {
    albums: null
  },

  getters: {
    albumsList: state => state.albums
  },

  mutations: {
    SET_ALBUMS(state, albums) {
      state.albums = albums;
    }
  },

  actions: {
    async loadAlbums({commit}) {
      let response = await api.get(endPoint);
      commit('SET_ALBUMS', response.data);
    }
  }
};

