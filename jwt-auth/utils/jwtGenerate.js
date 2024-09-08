//importing required packages 
const jwt = require("jsonwebtoken");


//exporting a function which creates and returns a json web token
module.exports = (data) =>{
    return jwt.sign(data,process.env.JWT_SECRET);
}