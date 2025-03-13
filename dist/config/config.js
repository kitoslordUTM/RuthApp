"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongodb_Uri = exports.PORT = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var mongodb_Uri = exports.mongodb_Uri = process.env.MONGODB_URI;
var PORT = exports.PORT = process.env.PORT || 3000;