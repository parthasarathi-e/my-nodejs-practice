const Joi = require("joi");
const mongoose = require("mongoose");

// You can use phind.com AI for creating detailed validators

// Basic level data validation without joy
const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLength: 5
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

const userValidatior = (data)=>{
    return Joi.object({
        username: Joi.string().min(5).required(),
        name:Joi.string().required(),
        email:Joi.string().email().required().custom((value,helper)=>{
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/i
            if(!emailRegex.test(value)) return helper.message("Only .com and .in domains are allowed");
            return value;
        }),
        age:Joi.number().required(),
        contact:Joi.number().required()
    }).validate(data).error;
}
module.exports.userModel = mongoose.model("user", userSchema);
module.exports.userValidatior = userValidatior;

