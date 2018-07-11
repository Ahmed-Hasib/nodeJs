var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    console.log(req.url);
    if(req.url=='/home')
   {
     var readfile=fs.createReadStream(__dirname+'/home.html','utf8').pipe(res);
   }
   else if(req.url=='/about')
       {
       var readfile=fs.createReadStream(__dirname+'/about.html','utf8').pipe(res);
       }
     else
         {
             var readfile=fs.createReadStream(__dirname+'/404.html','utf8').pipe(res);
         }
});
server.listen(3000,'127.0.0.1');