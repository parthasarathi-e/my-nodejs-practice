const express = require("express");
require("dotenv").config();
const redisClient = require("./config/redisSetup");
const db= require("./config/mongoConnect");
const userModel = require("./models/userModel");
const { log } = require("console");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("REDIS CACHE")
    
})

app.post("/create",async(req,res)=>{
    let {username,email} = req.body;
    let user = await userModel.create({username,email});
    res.send(user);
})

app.get("/user/:username",async(req,res)=>{
    let user = await redisClient.get(`user-${req.params.username}`);
    if(!user){
        console.log("not in cache");
        user = await userModel.findOne({username:req.params.username});
        redisClient.setEx(`user-${req.params.username}`,5*60*60,JSON.stringify(user));
    }
    res.send(user);

})

app.listen(3000,()=>{
    console.log("Server running");
    
})