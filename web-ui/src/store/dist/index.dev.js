"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuexPersistedstate = _interopRequireDefault(require("vuex-persistedstate"));

var _user = _interopRequireDefault(require("./modules/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  modules: {
    user: _user["default"]
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: [(0, _vuexPersistedstate["default"])()]
});

exports["default"] = _default;