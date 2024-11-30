import { Schema } from "mongoose";
import mongoose from "mongoose";
const UserSchema=Schema({
    name:String,
    email:String,
    subject:String,
    body:String
})

export const User=mongoose.model('portfolio',UserSchema)