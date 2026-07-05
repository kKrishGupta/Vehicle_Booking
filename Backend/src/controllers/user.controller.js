const userModel = require('../models/user.models');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blackList = require("../models/blackListToken");
const registerUser = async(req,res,next)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const { firstName, lastName, email, password } = req.body;

        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const token = user.generateAuthToken();
        res.status(201).json({
            token,
            user
        });

    }catch(error){
       console.log(error);
       next(error);
    }
}


const loginUser = async(req,res,next)=>{
try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body;
    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const token = user.generateAuthToken();

    res.cookie('token',token,{
        httpOnly: true,
        secure:process.env.NODE_ENV === 'production',
        maxAge :3600000
    });
    return res.status(200).json({
        token,
        user
    });

    }catch(error){
    console.log(error);
    next(error);
}
}



const getUserProfile= async(req,res,next) =>{
res.status(200).json(req.user);
}

const logoutUser = async(req,res,next) =>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await blackList.create({token});
    res.status(200).json({message :'Logged Out'});
}

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    logoutUser
}