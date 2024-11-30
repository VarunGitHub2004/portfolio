import { createUser } from "../controller/user.js";
import express from 'express'
export const userRouter=express.Router()
userRouter.post('/',createUser)