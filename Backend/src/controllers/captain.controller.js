const captainModel = require('../models/captain.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackList = require("../models/blackListToken");
const captainService = require('../services/captain.service');

const registerCaptain = async (req, res, next) => {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            firstName,
            lastName,
            email,
            password,
            vehicle,
            vehicleType
        } = req.body;

        const isExistingCaptain = await captainModel.findOne({ email });

        if (isExistingCaptain) {
            return res.status(400).json({
                message: "Captain with this email already exists"
            });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createCaptain({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType
        });

        const token = captain.generateAuthToken();

        return res.status(201).json({
            token,
            captain
        });

    } catch (err) {
        next(err);
    }
};

const loginCaptain = async (req, res, next) => {
  try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const isPasswordValid = await captain.comparePassword(password);
    if(!isPasswordValid){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const token = captain.generateAuthToken();
    res.cookie("token", token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        maxAge:3600000
    });
    res.status(200).json({
        token,
        captain
    }); 

  }catch(error){
    console.log(error);
    next(error);
  }
}

const getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}


const logoutCaptain = async (req, res, next) => {
    try {
        const token =
            req.cookies.token ||
            req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        await blackList.create({ token });

        res.clearCookie("token");

        return res.status(200).json({
            message: "Logged out successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerCaptain,
    loginCaptain,
    getCaptainProfile,
    logoutCaptain
};