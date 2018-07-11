//var http=require('http');
//var server=http.createServer(function(req,res){
//    res.writeHead(200,{'Content-Type':'text/plain'});
//    res.end("Hey Nu-Cle-Us,How are you??");
//});
//server.listen(3000,'127.0.0.1');
//console.log("we are listening using 3000 port");
var http=require('http');//http is core module
var server=http.createServer(function(req,res){
    console.log("Request is: "+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});//here 200 means ok
    res.end("Hi Soma are you there");//here using .end to send data
    
});
server.listen(3000,'127.0.0.1'); //here 3000 is port  number.this number can be any number 