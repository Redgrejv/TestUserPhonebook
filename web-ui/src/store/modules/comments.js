
const state = {
    list: [{
        _id: Math.random() + '',
        author: 'admin@admin.com',
        text: 'Default text from admin'
    }, {
        _id: Math.random() + '',
        author: 'user@user.com',
        text: 'Text about user'
    }]
}

const actions = {

}

const mutations = {

}

const getters = {
    LIST_COMMENTS: state => state.list
}

export default {
    state,
    mutations,
    actions,
    getters
}