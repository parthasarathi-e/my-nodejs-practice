const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    username:String,
    name:String,
    age:String,
    email:String,
    isStudent:Boolean,
})

module.exports = mongoose.model("user",userSchema);