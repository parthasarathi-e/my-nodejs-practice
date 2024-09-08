//importing utility functions
const isLoggedIn = require("../../utils/isLoggedIn")

//exporting logout router
module.exports = async (req,res)=>{
    //checking if user is loged in
    //if logged in continue logout
    //else telling user action cannot be performed
    if(!await isLoggedIn(req)) return res.status(400).send("You are not logged in to perform this action.");
    //removing sesion cookie (logging out the user)
    res.clearCookie("token");
    //telling user logged out successfully
    res.status(200).send("Logged out successfully");
}