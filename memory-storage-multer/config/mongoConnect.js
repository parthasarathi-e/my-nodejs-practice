const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/profilepic");

mongoose.connection.on("open",()=>{
    console.log("Database connected");
    
})

module.exports = mongoose.connection;