import {User} from '../modal/user.js'

export const createUser=(req,res)=>{
    const newUser= new User(req.body)
    newUser.save()
}