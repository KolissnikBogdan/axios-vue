import { api } from "@/apis/config";

const endPoint = 'albums'


    const state = {
        albums: []
    }

    const getters = {}
    const mutations = {
        SET_ALBUMS(state, data) {
            state.albums = data
        }
    }

    const actions =  {
        loadAlbums({commit}) {
            api.get(endPoint)
                .then(res => { commit('SET_ALBUMS', res.data) })
                .catch(error => console.log(error))
        }
    }


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
