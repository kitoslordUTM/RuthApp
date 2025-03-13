"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupSchema = exports.signInSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var signupSchema = exports.signupSchema = _joi["default"].object({
  email: _joi["default"].string().min(6).max(60).required().email({
    tlds: {
      allow: ['com', 'net']
    }
  }),
  password: _joi["default"].string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
});
var signInSchema = exports.signInSchema = _joi["default"].object({
  email: _joi["default"].string().min(6).max(60).required().email({
    tlds: {
      allow: ['com', 'net']
    }
  }),
  password: _joi["default"].string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
});