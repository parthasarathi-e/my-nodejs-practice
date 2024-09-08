const { homeController } = require("../controllers/homeController");
const isLoggedIn = require("../middleware/isLoggedIn");

const router = require("express").Router();

router.get("/",isLoggedIn, homeController);

module.exports = router;