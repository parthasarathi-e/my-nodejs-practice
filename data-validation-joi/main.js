const express = require("express");
const db = require("./config/mongoose");
const {userModel,userValidatior} = require("./models/userModel");
const Joi = require("joi");



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("OK")
})

app.post("/create",async (req,res)=>{
    let message = userValidatior(req.body)?.message;
    if(message) return res.status(400).send(message);
    const user = await userModel.create(req.body);
    res.status(200).send(user);
})

app.listen(3000,()=>{
    console.log("Server up and running on port 3000");
})