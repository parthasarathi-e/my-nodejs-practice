const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.set("View engine","ejs");

app.get("/",async (req,res)=>{
const books = await fs.readdir("./note");
res.render("index.ejs",{books:books});

});

app.post("/create",async (req,res)=>{
    const today = new Date().toDateString().slice(4,).replaceAll(" ","-");
    await fs.writeFile(`./note/${today}`,"hi");
    res.redirect(`/book/${today}`);
})

app.get("/book/:date",async (req,res)=>{
const books = await fs.readdir("./note");
const {date} = req.params;
if(!books.includes(date)){
    res.send("note not found");
} else{
const data = await fs.readFile(`./note/${date}`,"utf8");
res.render("book.ejs",{date:date,text:data});
}
})

app.post("/book/:date/update",async (req,res)=>{
    await fs.writeFile(`./note/${req.params.date}`,req.body.text);
    res.redirect(`/book/${req.params.date}`);
})

app.get("/book/:date/delete",async(req,res)=>{
await fs.rm(`./note/${req.params.date}`);
res.redirect("/")

})

app.get("*",(req,res)=>{
    res.render("error.ejs",{code:"404 Error",error:"Route doesnt exist"});
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})

// View all books
// View single book
// Edit a book
// Delete a book
// create a book