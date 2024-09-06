const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("View engine","ejs")


app.post("/lomgin",(req,res)=>{
    res.status(200);
    res.send("Wormking")
    let {email,password} = req.body;
    console.log(email,password)
    console.log(req.body)
    // res.redirect("/user")
})

app.get("/",(req,res)=>{
    res.send("WELCUM")
})

app.get("/lomgin",(req,res)=>{
    res.render("index.ejs")
})
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})