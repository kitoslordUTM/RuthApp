"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _user = require("../controllers/user.controller");
var router = (0, _express.Router)();
router.post('/signUp', _user.signup);
router.post('/signIn', _user.signIn);
router.post('/signOut', _user.signOut);
router.patch('/verify', _user.sendVerficationCode);
var _default = exports["default"] = router;