// const { type } = require("express/lib/response")
// const UserModel= require("../models/userModel")
import UserModel from '../model/userModel.js';

const createUser= async()=>{
    try {
        let data= req.body;
        let newuser = await UserModel.create(data);
        res.status(200).json({message:newuser})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports= createUser;











