const mongoose = require("mongoose");

const postModel = mongoose.Schema({
    title:String,
    content:String,
    author:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports = mongoose.model("post",postModel);