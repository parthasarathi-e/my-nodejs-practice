const express = require("express");
const embedModel = require("./models/embedModel");
const db = require("./config/mongoose");
const referenceModelUser = require("./models/referenceModelUser");
const reverenceModelPost = require("./models/reverenceModelPost");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("OK");
})

app.post("/embed/user/create", async (req, res) => {
    let user = await embedModel.create(req.body);
    res.send(user);
})

app.post("/embed/:username/create/post", async (req, res) => {
    const user = await embedModel.findOne({ username: req.params.username });
    user.posts.push({ content: "there are 10 types of people in the world, one who understands binary and other who doesnt" });
    user.save();
    res.send(user);
})

app.post("/ref/user/create", async (req, res) => {
    let user = await referenceModelUser.create(req.body);
    res.send(user);
})

app.post("/ref/:username/create/post",async(req,res)=>{
    let user = await referenceModelUser.findOne({username:req.params.username})
    let post = await reverenceModelPost.create({
        user:user._id,
        content: "there are 10 types of people in the world, one who understands binary and other who doesnt"
    });
    user.posts.push(post._id);
    user.save();
    res.send(post);

})

app.get("/ref/posts/:username",async(req,res)=>{
    let user = await referenceModelUser.findOne({username:req.params.username}).populate("posts");
    res.send(user.posts);
})


app.listen(3000, () => {
    console.log("Server up and running on port 3000");
})