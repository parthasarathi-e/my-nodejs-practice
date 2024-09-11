const express = require("express");
const http = require("node:http");
const path = require("node:path");
const socketIo = require("socket.io");

const app = express();

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
const server = http.createServer(app);
const io = socketIo(server);
io.on("connection",socket=>{
    socket.on("signalingMessage",message=>{
        socket.broadcast.emit("signalingMessage",message);
    })
})
app.get("/",(req,res)=>{
    res.render("index.ejs");
    // console.log(io);
})

server.listen(3000,()=>{
    console.log("Server running");
})
