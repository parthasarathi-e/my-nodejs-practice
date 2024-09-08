// This is for referencing data 

const mongoose = require("mongoose");

const referencePostSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ruser"
    },
    content:String,
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("rpost",referencePostSchema);