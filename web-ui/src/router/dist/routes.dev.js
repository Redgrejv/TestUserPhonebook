"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Sign = _interopRequireDefault(require("../views/Sign.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"],
  meta: {
    show: true,
    auth: false,
    showAfterAuth: true
  }
}, {
  path: '/sign-in',
  name: 'SignIn',
  component: _Sign["default"],
  props: {
    action: 'in'
  },
  meta: {
    show: false,
    auth: false,
    showAfterAuth: false
  }
}, {
  path: '/sign-up',
  name: 'SignUp',
  component: _Sign["default"],
  props: {
    action: 'up'
  },
  meta: {
    show: false,
    auth: false,
    showAfterAuth: false
  }
}, {
  path: '*',
  name: 'NotFound',
  meta: {
    show: false,
    auth: false,
    showAfterAuth: true
  }
}];
var _default = routes;
exports["default"] = _default;