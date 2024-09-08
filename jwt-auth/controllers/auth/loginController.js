// importing packages
const bcrypt = require("bcrypt");

//importing database models
const { userModel } = require("../../models/userModel");

//importing utility functions
const isLoggedIn = require("../../utils/isLoggedIn");
const jwtGenerate = require("../../utils/jwtGenerate");


//exporting route
module.exports = async (req, res) => {
    //checking if user is already logged in
    //if logged in redirect to profile
    //else continue login
    if (await isLoggedIn(req)) return res.status(400).redirect("/profile");
    // checking if user already exists
    // if user exists continue login
    // else tell user to register
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("User with requested email doesnt exist");
    // checking the user entered password
    // if correct password create a session
    // else tell user invalid email or password
    let isCorrectPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrectPassword) return res.status(400).send("Invalid email or password")
    // creating a session using jwt
    let sessionToken = jwtGenerate(user.email);
    //sending session data to the borwser via cookies
    res.cookie("token", sessionToken, { maxAge: 10 * 60 * 1000 })
    //sending user email to browser for anyusage
    res.cookie("email", req.body.email, { maxAge: 10 * 60 * 1000 });
    //redirecting the user to profile route
    res.status(200).redirect("/profile");
}