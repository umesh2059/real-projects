
import Usermodel from "../models/Usermodel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

 export const registerUser =async(req,res)=>{
    const {name,email,password} = req.body;

    const userExists=await Usermodel.findOne({email});

    if (userExists)
        return res.status(400).json({message:"User already exists"});


    const hashedPassword =await bcrypt.hash(password,10);

    const user = await Usermodel.create({
        name,
        email,
        password:hashedPassword,
    });

    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:jwt.sign({id:user._id},process.env.JWT_SECRET),
    });
 };