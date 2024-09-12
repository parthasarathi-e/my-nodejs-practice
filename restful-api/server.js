const express = require("express");
const db = require("./config/mongoConnect");
const apiRouter = require("./routes/apiRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log("Server Running");
})