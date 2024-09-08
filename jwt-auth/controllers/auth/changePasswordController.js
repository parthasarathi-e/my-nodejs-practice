//importing required packages
const brypt = require("bcrypt");

//importing database models
const { userModel } = require("../../models/userModel");

//importing utility functions
const isLoggedIn = require("../../utils/isLoggedIn");

//exporting change password router
module.exports = async (req,res)=>{
    //checking if user is logged in
    //if logged in continue change password
    //else tell user You are not allowed to perform the action
    if(!await isLoggedIn(req)) return res.status(400).send("You are not logged in to perform this action.");
    //destructuring required data from request.body
    let {password,newPassword,confirmNewPassword} = req.body;
    //checking if newPassword and confirmNewPassword are matching or not (level 2 validation)
    //if matches continue change password
    // else tell user that passwords do not match
    if(newPassword != confirmNewPassword) return res.status(400).send("Passwords do not match.");
    //fetch the user from the database
    let user = await userModel.findOne({email:req.body.email || req.cookies.email});
    //checking if the enterd password is correct password
    //if correct continue change password
    //else tell user Incorrect password
    if(!await brypt.compare(password,user.password)) return res.status(400).send("Incorrect password");
    //hasing the new password with added salt using bcrypt
    let newHashedPassword = await brypt.hash(newPassword,10);
    //changing the old password in the database to new password
    user.password = newHashedPassword;
    await user.save();
    //telling user that password is changed successfully
    res.status(200).send("Password changed.")
}
