// import { axios } from "vue/types/umd";


const state = {
    info: null,
    isAuthorized: false,
    defaultUsers: [{
        email: 'admin@admin.com',
        password: 'admin'
    }, {
        email: 'user@user.com',
        password: 'user'
    }]
}

const mutations = {
    updateUserAuthorization(state, auth) {
        state.isAuthorized = auth;
    },
    setUserInfo(state, data) {
        state.info = data
    },
    addDefaultUsers(state, data) {
        state.defaultUsers.push(data)
    }
}

const actions = {
    SIGN_IN: (context, data) => {
            // return axios.post('/sign/in', data);

        const dUser = context.rootState.user.defaultUsers.find(el => el.email === data.email);

        return new Promise((resolve, reject) => {

            if (!dUser) {
                return reject('User not found');
            }

            if (dUser.password !== data.password) {
                return reject('invalid user credentials');
            }

            return resolve({data: dUser});

        });
    },
    SIGN_UP: (context, data) => {
        // return axios.post('/sign/up', data)

        const dUser = context.rootState.user.defaultUsers.find(el => el.email === data.email);

        return new Promise((resolve, reject) => {

            if (dUser) {
                return reject('User is busy');
            }

            context.commit('addDefaultUsers', data);

            return resolve({data});

        });

    },
    SIGN_OUT: async (context) => {
        context.commit('setUserInfo', null);
        context.commit('updateUserAuthorization', false);
    }
}

const getters = {
    USER_INFO: state => state.info,
    IS_AUTHORIZED: state => state.isAuthorized
}

export default {
    state,
    mutations,
    actions,
    getters
}
