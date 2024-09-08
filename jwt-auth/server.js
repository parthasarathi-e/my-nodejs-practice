// import packages
const express = require("express");
const cookieParser = require("cookie-parser");

//configure dotenv
require("dotenv").config();

//import any middlewares

//import routers
const authRouter = require("./routes/authRouter");
const homeRouter = require("./routes/homeRouter");

//creating server
const server = express();

//setting up mongodb connection
const db = require("./config/mongoConnection");

//setting up middlewares
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({extended:true}));

//setup routers
server.use("/api/auth",authRouter);
server.use("/",homeRouter)

//handling unavailable routes
server.get("*",(req,res)=>res.status(400).send("Route unavailable"));
server.post("*",(req,res)=>res.status(400).send("Route unavailable"));


//start server
server.listen(process.env.PORT,()=>{
    console.log(`[${new Date().toLocaleString()}] Server is up and running!`);
})