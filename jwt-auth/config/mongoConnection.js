// importing mongoose
const mongoose = require("mongoose");

//establish connection
mongoose.connect(`${process.env.MONGO_URI}`);

//checking if any error using mongoose event
mongoose.connection.on("error",(error)=>{
    console.log(`[${new Date().toLocaleString()}] Mongoose error occured!\nError message: ${error.message}`);
})

//checking if connection established successfully
mongoose.connection.on("open",()=>{
    console.log(`[${new Date().toLocaleString()}] MongoDB connected successfully!`)
})

//exporting connection for any further usage
module.exports = mongoose.connection;