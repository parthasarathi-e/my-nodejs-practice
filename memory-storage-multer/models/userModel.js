const mongoose = require("mongoose");
const { stringify } = require("querystring");

const userSchema = mongoose.Schema({
    username: String,
    profile: {
        bytes: { type: Buffer },
        fileType: { type: String }
    }
})

module.exports = mongoose.model("user", userSchema);