const express = require("express");
const dbConnection = require("./config/mongoose");
const userModel = require("./models/user");
const app = express();

app.get("/", (req, res) => {
    res.send("200 OK");
})

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "test",
        name: "Test user",
        email: "hi@testing.com",
        password: "pass"
    })
    res.send(user);
})

app.get("/read", async (req, res) => {
    let user = await userModel.findOne({
        username: "test"
    })
    res.send(user);
})

app.get("/readall", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get("/update", async (req, res) => {
    let user = await userModel.findOneAndUpdate(
        { username: "test" }, 
        {email: "bye@testing.com"}, 
        { new: true })
    res.send(user);
})

app.get("/delete",async (req,res)=>{
    let user = await userModel.findOneAndDelete({username:"test"});
    res.send(user);
})

app.listen(3000, () => {
    console.log("Server is up and running at port 3000");
})