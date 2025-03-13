// models/user.model.js
import { Schema, model } from 'mongoose';


const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength:[ 5, 'Email must have 5 characters!'],
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    verified:{
        type: Boolean,
        default: false
    },
    verficationCodeValidation:{
        type: String,
        select: false
    },
    forgotPasswordCode:{
        type: String,
        select: false
    },
    forgotPasswordCodeValidation:{
        type: Number,
        select: false
    }
  },
  {
    timestamps: true
  }
);


// Exportar el modelo
export default model('User', userSchema);
