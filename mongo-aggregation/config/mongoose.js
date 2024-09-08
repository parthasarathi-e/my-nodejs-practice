const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/aggdb");

const db = mongoose.connection;

db.on("error",()=>{
    console.log("Error");
})

db.on("open",()=>{
    console.log("Database connected");
})