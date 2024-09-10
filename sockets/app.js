const express = require("express");
const socketIo = require("socket.io");
const http = require("node:http");

const app = express();

app.set("view engine", "ejs");


const server = http.createServer(app);

const io = socketIo(server);


io.on("connection", (socket) => {
    socket.on("message", data => {
        io.emit("message",data);
    })

})

app.get("/", (req, res) => {
    res.render("index.ejs");
})

server.listen(3000, () => {
    console.log("Running");
})
