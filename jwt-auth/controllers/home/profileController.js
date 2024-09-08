//importig database models
const { userModel } = require("../../models/userModel");

//importing utility functions 
const isLoggedIn = require("../../utils/isLoggedIn");

//exporting profile controller
module.exports = async(req,res)=>{
    //checking if the user is logged in or not
    //if logged in then continue the profle process
    //else tell user that this action cannot be performed
    if(!await isLoggedIn(req)) return res.status(400).send("You are not logged in to perform this action");
    //fetching user from the database and removing password field from it
    let user = await userModel.findOne({email:req.cookies.email}).select("-password");
    //sending user object as a response
    res.json(user);
}