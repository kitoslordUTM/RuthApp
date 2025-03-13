"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmacProcess = exports.doHashValidation = exports.doHash = void 0;
var _bcryptjs = require("bcryptjs");
var _crypto = require("crypto");
var doHash = exports.doHash = function doHash(value, saltValue) {
  var result = (0, _bcryptjs.hash)(value, saltValue);
  return result;
};
var doHashValidation = exports.doHashValidation = function doHashValidation(value, hashedValue) {
  var result = (0, _bcryptjs.compare)(value, hashedValue);
  return result;
};
var hmacProcess = exports.hmacProcess = function hmacProcess(value, key) {
  var result = (0, _crypto.createHmac)('sha256', key).update(value).digest('hex');
  return result;
};