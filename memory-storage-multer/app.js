const express = require("express");
const { upload } = require("./multerSetup");
const db = require("./config/mongoConnect");
const userModel = require("./models/userModel");
const sharp = require("sharp");
const path = require("path")


const app = express();

app.set("View engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("form.ejs")
})

app.post("/create",upload.single("image"),async (req,res)=>{
    if(!req.file) return res.redirect("/");
    let newBuffer = await sharp(req.file.buffer).resize({width:500}).toBuffer();
    let user = await userModel.create({
        username:req.body.username,
        'profile.bytes':newBuffer,
        'profile.fileType': req.file.mimetype
    })
    res.render("user.ejs",{user})
})

app.listen(3000,()=>{
    console.log("Server Running");
})