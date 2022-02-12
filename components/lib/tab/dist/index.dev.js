"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tab = _interopRequireDefault(require("./src/Tab.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tab = {
  install: function install(app) {
    app.component('pixel-tab', _Tab["default"]);
  }
};
var _default = Tab;
exports["default"] = _default;