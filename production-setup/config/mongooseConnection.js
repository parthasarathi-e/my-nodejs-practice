const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);

mongoose.connection.once("open",()=>{
    console.log(`Mongo connected on ${new Date().toLocaleString()}`);
})

module.exports = mongoose.connection;