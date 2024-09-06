const http = require("node:http");

var server = http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            res.end("200 OK Route "+req.url);
            break;
        case "/login":
            res.end("200 OK Route "+req.url);
            break;
        default:
            res.end("404 NOT FOUND Route"+req.url);
            break;
    }

})

server.listen(3000);