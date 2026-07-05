const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength:[3,'first name must be at least 3 characters long'],
  },
  lastName: {
    type: String,
    minlength:[3,'last name must be at least 3 characters long'],
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Please fill a valid email address']
  },
  password:{
    type:String,
    required:true,
    minlength:[8,'Password must be at least 8 characters long'],
  },

  vehicle:{
    color:{
      type:String,
      required:true,
      minlength:[3,'Vehicle color must be at least 3 characters long'],
    },
    plate:{
      type:String,
      required:true,
      unique:true,
    },
    capacity:{
      type:Number,
      required:true,
      min:[1,'Vehicle capacity must be at least 1'],
    },
  },

  vehicleType:{
      type:String,
      required:true,
      enum:['car','bike','auto'],
    },
  location:{
      lati:{
        type:Number,
      },
      lng:{
        type:Number,
      }
    },
});


captainSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
  return token;
}

captainSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password){
  return await bcrypt.hash(password,10);
}

module.exports = mongoose.model("Captain",captainSchema); 

