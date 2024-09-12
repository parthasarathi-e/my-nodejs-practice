const bcrypt = require("bcrypt");

module.exports.hashedPassword = async (password) => {
    return await bcrypt.hash(password, 10);
} 

module.exports.createUser = (user)=>{
    if(!user.username && !user.password)return false;
    if(!user.username || !user.password)return true;
    return true;
}