//importing required packages
const mongoose = require("mongoose");
const Joi = require("joi");

//creating a mongoose schema for storing users in database
const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    createdAt:{type:Date,default:Date.now()}
    
});

//creating a coolection in the database to store users
const userModel =mongoose.model("user",userSchema);

//creating a level 2 validator function with joi to validate user data to avoid errors in database
const validateUser = (data) =>{
    return Joi.object({
        fullName:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().required()
    }).validate(data).error;
}

//exporting user model and validator function
module.exports = {userModel,validateUser};