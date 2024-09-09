const multer = require("multer");
const path = require("path");

const fileFilter = (req,file,cb)=>{
let isValidType = [".png",".jpg",".jpeg"].includes(path.extname(file.originalname));
cb(null,isValidType);
return;
}
module.exports.upload = multer({storage:multer.memoryStorage(), fileFilter:fileFilter, fileSize:5*1024*1024});