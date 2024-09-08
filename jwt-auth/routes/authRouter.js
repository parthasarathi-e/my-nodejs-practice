//importing express erouter to setup router 
const {Router} = require("express");

//importing diffrent controllers
const { registerController, loginController, logoutController, changePasswordController } = require("../controllers");

//creating a router
const router = Router();


//creating routes
router.post("/register",registerController);
router.post("/login",loginController);
router.get("/logout",logoutController);
router.post("/change/password",changePasswordController);

//exporting router
module.exports = router;