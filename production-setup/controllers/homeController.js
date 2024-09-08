const { generateUsername } = require("../utils/usernameGen");

module.exports.homeController = (req,res)=>{
    let id = generateUsername();
res.send(`Home Route Generated id: ${id}`);
}