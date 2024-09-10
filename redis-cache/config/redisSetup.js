const {createClient}= require("redis");
const client = createClient({
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on("connect",()=>{
    console.log("Redis Connected");
})
client.connect();

module.exports = client;