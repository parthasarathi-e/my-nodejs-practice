const express = require("express");
const path = require("path");
const app = express();

app.set("View engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.listen(3000,()=>{
    console.log("Server running");
})