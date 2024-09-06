const express = require("express");
const dbConnection = require("./config/mongoose");
const userModel = require("./models/userModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("OK");
})

app.post("/create", async (req, res) => {
    if(!req.body.username) {
        res.status(400)
        res.send("No user details provided");
        return;
    }
    let user = await userModel.create(req.body)
    res.send(user);
})

app.get("/profile/:username",async(req,res)=>{
    let user = await userModel.findOne({
        username: req.params.username
    })
    if(!user) {
        res.send("User not found");
        return;
    }
    res.send(user);
})

app.post("/update",async (req,res)=>{
    let user = await userModel.findOneAndUpdate({username:req.body.username},req.body,{new:true});
    res.send(user);
})

app.post("/delete",async (req,res)=>{
    let user = await userModel.findOne({username:req.body.username});
    if(!user?.admin){
        res.send("You are not admin to perform this action");
        return;
    }
    user = await userModel.deleteOne(user);
    res.send(user);
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
})