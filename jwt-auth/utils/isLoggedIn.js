//importing required packages
const jwt = require("jsonwebtoken");

//importing database models
const { userModel } = require("../models/userModel");


//exporting a function which returs true if user is logged in else returns false
module.exports = async (req)=>{
    //destructuring token from the cookies
    let {token} = req.cookies;
    //returning false if token is not present
    if (!token) return false;
    //verfying if the token is valid or not 
    let data = jwt.verify(token,process.env.JWT_SECRET);
    //returning false if token is not a valid one
    if(!data) return false;
    //returning true if the token valid
    return true;
}