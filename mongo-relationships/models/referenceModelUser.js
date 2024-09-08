// This is for referencing data 

const mongoose = require("mongoose");

const referenceUserModel = mongoose.Schema({

    username:String,
    name:String,
    email:String,
    password:String,
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:"rpost"}]
})

module.exports = mongoose.model("ruser",referenceUserModel);