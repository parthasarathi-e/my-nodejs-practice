const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/rels");

const db = mongoose.connection;

db.on("error",(err)=>{
    console.log("Error");
})

db.on("open",()=>{
    console.log("Connected");
})

module.exports =  db;
