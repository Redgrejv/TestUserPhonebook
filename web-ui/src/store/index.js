import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

import user from './modules/user';
import comments from './modules/comments';

export default new Vuex.Store({
    modules: {
        user,
        comments
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    plugins: [
        createPersistedState()
    ]
})