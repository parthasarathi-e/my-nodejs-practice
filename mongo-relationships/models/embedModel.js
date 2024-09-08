// This is for embedding data 

const mongoose = require("mongoose");

const embedPostAndUserSchema = mongoose.Schema({

    username:String,
    name:String,
    email:String,
    password:String,
    posts:[{
        content:String,
        date:{
            type:Date,
            default:Date.now()
        }
    }]
})

module.exports = mongoose.model("user",embedPostAndUserSchema);