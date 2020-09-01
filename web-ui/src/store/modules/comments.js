
const state = {
    comments: [{
        _id: Math.random() + '',
        author: 'admin@admin.com',
        text: 'Default text from admin',
        created: Date.now()
    }, {
        _id: Math.random() + '',
        author: 'user@user.com',
        text: 'Text about user',
        created: Date.now() + 1
    }]
}

const actions = {

}

const mutations = {
    PUSH_TO_LIST(state, comment) {
        comment._id = Math.random() + '';
        comment.created = Date.now();

        state.comments.push(comment);
    },
    SET_COMMENT_LIST(state, comments) {
        state.comments = comments;
    }
}

const getters = {
    LIST_COMMENTS: state => state.comments.sort((a, b) => a.created - b.created)
}

export default {
    state,
    mutations,
    actions,
    getters
}