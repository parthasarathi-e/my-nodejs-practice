const express = require("express");
const expressSession = require("express-session");
const passport = require("passport");
require("dotenv").config();
const server = express();
require("./googleStrategy");

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(expressSession({secret:process.env.EXPRESS_SECRET,resave:false,saveUninitialized:false}));
server.use(passport.initialize());


server.get("/",(req,res)=>{
    res.send("GOOGLE OAUTH")
})
server.get("/auth/google/callback",(req,res)=>{
    res.redirect("/")
})
server.get("/auth/google",passport.authenticate("google",{scope:["profile"]}),(req,res,next)=>{next()});

server.listen(3000,()=>{
    console.log("Server running");
})