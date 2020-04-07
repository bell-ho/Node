var http = require("http");
var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(app.router);

app.use(function(request,response){
    response.send("<h1>안녕</h1>")
})

http.createServer(app).listen(52273,function(){
    console.log("서버를 가동함");
});
