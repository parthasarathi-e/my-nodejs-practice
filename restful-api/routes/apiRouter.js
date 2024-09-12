const { Router } = require("express");
const userModel = require("../models/userModel");

const router = Router();


router.get("/users", async (req, res) => {
    let users = await userModel.find();
    res.json(users);
});

router.post("/users", async (req, res) => {
    let user = await userModel.create({ username: req.body.username, name: req.body.username });
    res.json(user);
});

router.put("/users/:id", async (req, res) => {
    let user = await userModel.findOneAndUpdate({
        _id: req.params.id
    }, {
        name: req.body.name
    }, {
        new: true
    })

    res.json(user);
})

router.delete("/users/:id", async (req, res) => {
    let user = await userModel.findOneAndDelete({
        _id: req.params.id
    })

    res.json(user);
})




module.exports = router;