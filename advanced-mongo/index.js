const express = require("express");
const userModel = require("./models/userModel");
const db = require("./config/mongoose");

const app = express();

app.get("/", (req, res) => {
    res.send("Gulgul");
})

app.get("/addmany", async (req, res) => {
    let addedUsers = await userModel.insertMany(require("./users.json").users);
    res.send(addedUsers);
})

app.get("/eqop", async (req, res) => {
    let users = await userModel.find({ age: { $eq: 25 } });
    res.send(users);
})

app.get("/noteqop", async (req, res) => {
    let users = await userModel.find({ age: { $ne: 25 } });
    res.send(users);
})

app.get("/ltop", async (req, res) => {
    let users = await userModel.find({ age: { $lt: 25 } });
    res.send(users);
})

app.get("/lteop", async (req, res) => {
    let users = await userModel.find({ age: { $lte: 25 } });
    res.send(users);
})

app.get("/gtop", async (req, res) => {
    let users = await userModel.find({ age: { $gt: 25 } });
    res.send(users);
})

app.get("/gteop", async (req, res) => {
    let users = await userModel.find({ age: { $gte: 25 } });
    res.send(users);
})

app.get("/inop", async (req, res) => {
    let users = await userModel.find({ age: { $in: [25, 30] } });
    res.send(users);
})

app.get("/ninop", async (req, res) => {
    let users = await userModel.find({ isStudent: { $nin: [false] } });
    res.send(users);
})

app.get("/existsop", async (req, res) => {
    let users = await userModel.find({ isAdmin: { $exists: [true] } });
    res.send(users);
})

app.get("/andop", async (req, res) => {
    let users = await userModel.find({ $and: [{ isStudent: true }, { age: { $gte: 18 } }] });
    res.send(users);
})

app.get("/orop", async (req, res) => {
    let users = await userModel.find({ $or: [{ isStudent: true }, { age: { $gte: 18 } }] });
    res.send(users);
})

app.get("/regex", async (req, res) => {
    let users = await userModel.find({ name: { $regex: /^D/i } });
    res.send(users);
})
app.listen(3000, () => {

    console.log("Server is up and running on port 3000");
})