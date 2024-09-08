const express = require("express");
require("dotenv").config();
const database = require("./config/mongooseConnection");
const homeRouter = require("./routes/homeRoute");

const server = express();

server.use("/",homeRouter);

server.listen(process.env.PORT,()=>{
    console.log(`Server started running at ${new Date().toLocaleString()}`);
})