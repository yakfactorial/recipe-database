var http = require("http");

var server = http.createServer(function(request, response){
    console.log("Request incoming");
});

server.listen(3000);
