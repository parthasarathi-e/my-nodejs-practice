//importing express erouter to setup router 
const {Router} = require("express");

//importing diffrent controllers
const { profileController} = require("../controllers");

//creating a router
const router = Router();

//creating routes
router.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

router.get("/profile/",profileController)

//exporting router
module.exports = router;