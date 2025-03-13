"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _medition = require("../controllers/medition.controller");
var router = (0, _express.Router)();
router.post('/', _medition.createMedition);
router.get('/', _medition.getMeditions);
router.get('/:userId', _medition.getMeditionById);
var _default = exports["default"] = router;