import { api } from "@/apis/config";

const endPoint = 'photos'


const state = {
    photos: []
}

const getters = {}

const mutations = {
    SET_PHOTOS(state, data) {
        state.photos = data
    }
}

const actions = {
    loadPhotos({commit}) {
        api.get(endPoint)
            .then(res => {
                commit('SET_PHOTOS', res.data)
            })
            .catch(error => console.log(error))
    },
    async loadPhoto(id) {
        let res = await api.get(`photos?albumId=${id}`);
        return res.data
    },
    async loadMore(id) {
        await api.get(`photos?albumId=${id}`).then(response => {
            return response.data[0].thumbnailUrl;
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

