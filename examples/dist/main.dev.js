"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

require("../dist/css/pixelCss.css");

var _lib = _interopRequireDefault(require("../components/lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _vue.createApp)(_App["default"]).use(_lib["default"]).mount('#app');