"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  computed: {
    user: function user() {
      return this.$store.getters.USER_INFO;
    },
    isAuthorized: function isAuthorized() {
      return this.$store.getters.IS_AUTHORIZED;
    }
  },
  methods: {
    errorMessage: function errorMessage(message) {
      this.$notify.error({
        title: 'Error',
        message: message
      });
    },
    successMessage: function successMessage(message) {
      this.$notify.success({
        title: 'Success',
        message: message
      });
    }
  }
};
exports["default"] = _default;