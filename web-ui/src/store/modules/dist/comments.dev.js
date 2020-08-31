"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  list: [{
    _id: Math.random() + '',
    author: 'admin@admin.com',
    text: 'Default text from admin'
  }, {
    _id: Math.random() + '',
    author: 'user@user.com',
    text: 'Text about user'
  }]
};
var actions = {};
var mutations = {};
var getters = {
  LIST_COMMENTS: function LIST_COMMENTS(state) {
    return state.list;
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;