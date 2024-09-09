const express = require("express");
const { upload } = require("./multerSetup");
const path = require("path")

const app = express();

app.set("View engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/upload",upload.single("image"),(req,res)=>{
    res.render("upload.ejs",{file:req.file.filename});
})



app.listen(3000,()=>{
    console.log("Server started")
})