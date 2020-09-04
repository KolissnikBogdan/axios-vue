import Vue from 'vue'
import Vuex from 'vuex'
import posts from "./modules/posts";
import albums from "./modules/albums";
import photos from "@/store/modules/photos";

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        namespaced: true,
        posts: posts,
        albums: albums,
        photos: photos
    }
})
