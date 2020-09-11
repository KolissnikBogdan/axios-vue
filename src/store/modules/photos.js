import {api} from '@/apis/config';

const endPoint = 'photos';

export default {
  state: {
    photos: [],
    albumPhoto: []
  },

  getters: {},

  mutations: {
    SET_PHOTOS(state, data) {
      state.photos = data;
    }
  },

  actions: {
    loadPhotos({commit}) {
      api.get(endPoint)
      .then(res => {
        commit('SET_PHOTOS', res.data);
      })
      .catch(error => console.log(error));
    },
    async loadPhoto(id) {
      let res = await api.get(`photos?albumId=${id}`);
      return res.data;
    }
  }
};
