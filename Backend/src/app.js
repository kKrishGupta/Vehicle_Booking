const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const app = express(); 
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("../src/routes/user.routes");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get("/",(req,res) =>{
  res.send("working routes");
})

app.use('/users',userRoutes);


module.exports = app;