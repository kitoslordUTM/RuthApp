"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var meditionSchema = new _mongoose.Schema({
  ldr: {
    type: Number,
    required: true,
    min: 0 // Evita valores negativos
  },
  soilHumidity: {
    type: Number,
    required: true,
    min: 0,
    max: 100 // Si se mide en porcentaje
  },
  soilState: {
    type: String,
    "enum": ['Seco', 'Húmedo'],
    // Asegura que solo tenga estos valores
    required: true
  },
  humidity: {
    type: Number,
    required: true,
    min: 0,
    max: 100 // Humedad en porcentaje
  },
  temperature: {
    type: Number,
    required: true,
    min: -50,
    // Temperatura mínima posible (ajustar según necesidad)
    max: 100 // Temperatura máxima posible
  },
  date: {
    type: Date,
    "default": Date.now // Guarda la fecha actual si no se proporciona
  },
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true // Agrega automáticamente createdAt y updatedAt
});
var _default = exports["default"] = (0, _mongoose.model)('Medition', meditionSchema);