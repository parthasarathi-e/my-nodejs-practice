//importing packages
const bcrypt = require("bcrypt");

//importing databse models
const { validateUser,userModel } = require("../../models/userModel");

//importing utility functions
const jwtGenerate = require("../../utils/jwtGenerate");
const isLoggedIn = require("../../utils/isLoggedIn");

// exporting route
module.exports = async (req,res)=>{
    //destructuring data from the request
    let {fullName,email,password} = req.body;
    //checking if user is already logged in
    //if logged in redirect to profile
    //else continue regestration
    if(await isLoggedIn(req)) return res.status(400).redirect("/profile");
    // checking if user already exists
    // if user exists telling them to login
    // else contiune regestraion
    let user = await userModel.findOne({email});
    if(user) return res.status(400).send("User already exists, try loging in");
    //validating user data before creating user with joi (level 2 validation)
    //if any validation error asking user to provide correct details
    //else continue regestration
    let error = validateUser({fullName,email,password});
    if(error) return res.status(400).send(error.message);
    //hasing password with added salt using bcrypt
    let hashedPassword = await bcrypt.hash(password,10);
    //creating user 
    let createdUser = await userModel.create({
        fullName,
        email,
        password:hashedPassword
    });
    //after successfully creating the user we want to automatically logging in the user
    //creating a session using jwt
    const sessionToken = jwtGenerate(createdUser.email);
    //sending session data to the borwser via cookies
    res.cookie("token",sessionToken,{maxAge:10*60*1000});
    //redirecting to profile route after regestration
    res.status(201).redirect("/profile");
}