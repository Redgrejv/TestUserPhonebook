"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _global = _interopRequireDefault(require("../mixins/global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dotenv = require('dotenv');

dotenv.config({
  path: '../.env'
});

_vue["default"].use(_elementUi["default"]);

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].config.productionTip = false;

_vue["default"].mixin(_global["default"]);

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');