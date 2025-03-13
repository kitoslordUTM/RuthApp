"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transport = void 0;
var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var transport = exports.transport = _nodemailer["default"].createTransport({
  service: 'gmail',
  auth: {
    user: 'healtyplus41@gmail.com',
    pass: 'hglwagbrbmshkygj'
  }
});