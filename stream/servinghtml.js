var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var readfile=fs.createReadStream(__dirname+'/index.html','utf8');
    readfile.pipe(res);//here pip is used to data from readfile to res.
    
});
server.listen(3000,'127.0.0.1');