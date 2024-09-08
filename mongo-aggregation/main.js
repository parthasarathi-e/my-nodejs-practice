const express = require("express");
const db = require("./config/mongoose");
const userModel = require("./models/userModel");
const postModel = require("./models/postModel");

const app = express();

app.get("/",(req,res)=>{
    res.send("OK")
})

app.get("/agg/match",async(req,res)=>{
    let users = await userModel.aggregate([
        {$match:{age:{$lte:20}}}
    ])
    res.send(users);
})

app.get("/agg/group",async (req,res)=>{
    let users = await userModel.aggregate([
        {$group:{
            _id:"$age",
            userdata:{
                $push:"$$ROOT"
            }
        }}
    ])
    res.send(users);
})

app.get("/agg/lookup",async (req,res)=>{
    let posts = await postModel.aggregate([
        {$lookup:{
            from:"users",
            localField:"author",
            foreignField:"_id",
            as:"authordata"
        }}
    ])
    res.send(posts);
})

app.get("/agg/project",async (req,res)=>{
    let users =await userModel.aggregate([
        {
            $project:{
                email:1
            }
        }
    ])
    res.send(users);
})

app.get("/agg/unwind",async (req,res)=>{
    let users =await userModel.aggregate([
        {
            $unwind:"$likes"
        }
    ])
    res.send(users);
})
app.listen(3000,()=>{
    console.log("Server up and running on port 3000");
})