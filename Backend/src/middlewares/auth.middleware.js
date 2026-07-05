const userModel = require('../models/user.models');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const blackList = require("../models/blackListToken");
const authUser = async(req,res,next) =>{
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];
  if(!token){
    return res.status(401).json({
      message:"Unauthorized aceess"
    })
  }

  const isBlackListed = await blackList.findOne({token :token});
  if(isBlackListed){
    return res.status(401).json({
      message:"Unauthorized access"
    })
  }
  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();

  }catch(error){
      return res.status(401).json({
        message:"Unauthorized access"
      })
  }
}

const authCaptain = async(req,res,next) =>{
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
      return res.status(401).json({
          message: "Unauthorized access"
      });
  }
  const isBlackListed = await blackList.findOne({token :token});
  if(isBlackListed){
    return res.status(401).json({
      message:"Unauthorized access"
    })
  }
  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    return next();

  }catch(error){  
    return res.status(401).json({
      message:"Unauthorized access"
    })
  }
}
module.exports = {authUser, authCaptain};