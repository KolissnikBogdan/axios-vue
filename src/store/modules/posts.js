import {api} from "@/apis/config";

const endPoint = 'posts'

const state = {
    posts: []
}

const getters = {}

const mutations = {
    SET_POSTS(state, data) {
        state.posts = data
    }
}

const actions = {
    loadPosts({commit}) {
        api.get(endPoint)
            .then(res => {
                commit('SET_POSTS', res.data)
            })
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

