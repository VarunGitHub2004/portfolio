import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { userRouter } from './routes/user.js'
import path from 'path'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
const __filename= fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)
dotenv.config()
const server=express()
server.use(cors())
server.use(express.static(path.join(__dirname,'./dist')))
server.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/index.html'))
})
server.use(express.json())
server.use('/',userRouter)
main().then(res=>console.log("Database connected succesfully")).catch(err=>console.log(err))
async function main()
{
    mongoose.connect(process.env.MONGO_URL)
}
server.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`)
})
