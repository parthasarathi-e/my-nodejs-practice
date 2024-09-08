//importing diffrent controllers and exporting them as an single object
module.exports = {
    registerController:require("./auth/registerController"),
    loginController:require("./auth/loginController"),
    logoutController:require("./auth/logoutController"),
    changePasswordController:require("./auth/changePasswordController"),
    profileController:require("./home/profileController")
}