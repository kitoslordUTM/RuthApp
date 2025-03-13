"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
// models/user.model.js

var userSchema = new _mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: [5, 'Email must have 5 characters!'],
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  verified: {
    type: Boolean,
    "default": false
  },
  verficationCodeValidation: {
    type: String,
    select: false
  },
  forgotPasswordCode: {
    type: String,
    select: false
  },
  forgotPasswordCodeValidation: {
    type: Number,
    select: false
  }
}, {
  timestamps: true
});

// Exportar el modelo
var _default = exports["default"] = (0, _mongoose.model)('User', userSchema);