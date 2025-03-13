"use strict";

var _app = _interopRequireDefault(require("./app"));
var _database = _interopRequireDefault(require("./database"));
var _config = require("./config/config");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _database["default"])().then(function () {
  // Una vez conectados a la base de datos, iniciamos el servidor
  _app["default"].listen(_config.PORT, function () {
    console.log('servidor corriendo en puerto 3000');
  });
});