const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    createdAt: {type:Date, default:Date.now()},
    likes:[String]
})

module.exports = mongoose.model("user",userSchema);