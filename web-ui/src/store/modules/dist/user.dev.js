"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// import { axios } from "vue/types/umd";
var state = {
  info: null,
  isAuthorized: false,
  defaultUsers: [{
    email: 'admin@admin.com',
    password: 'admin'
  }, {
    email: 'user@user.com',
    password: 'user'
  }]
};
var mutations = {
  updateUserAuthorization: function updateUserAuthorization(state, auth) {
    state.isAuthorized = auth;
  },
  setUserInfo: function setUserInfo(state, data) {
    state.info = data;
  },
  addDefaultUsers: function addDefaultUsers(state, data) {
    state.defaultUsers.push(data);
  }
};
var actions = {
  SIGN_IN: function SIGN_IN(context, data) {
    // axios.post('/sign/in');
    return new Promise(function (resolve, reject) {
      var dUser = state.defaultUsers.find(function (el) {
        return el.email === data.email;
      });

      if (!dUser) {
        return reject('User not found');
      }

      if (dUser.password !== data.password) {
        return reject('invalid user credentials');
      }

      return resolve({
        data: dUser
      });
    });
  },
  SIGN_UP: function SIGN_UP(context, data) {
    return new Promise(function (resolve, reject) {
      var dUser = state.defaultUsers.find(function (el) {
        return el.email === data.email;
      });

      if (dUser) {
        return reject('User is busy');
      }

      context.commit('addDefaultUsers', data);
      return resolve({
        data: data
      });
    });
  },
  SIGN_OUT: function SIGN_OUT(context) {
    return regeneratorRuntime.async(function SIGN_OUT$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context.commit('setUserInfo', null);
            context.commit('updateUserAuthorization', false);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var getters = {
  USER_INFO: function USER_INFO(state) {
    return state.info;
  },
  IS_AUTHORIZED: function IS_AUTHORIZED(state) {
    return state.isAuthorized;
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;