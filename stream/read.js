////var http=require('http');
//var fs=require('fs');
//var myStream=fs.createReadStream(__dirname+'/text.txt');
//myStream.on('data',function(chunk){
//    console.log("New chunk of data received: ");
//    console.log(chunk);
//    
//});
var fs=require('fs');
var mystream=fs.createReadStream(__dirname+"/text.txt","utf8");
mystream.on('data',function(chunk){
    console.log(chunk);
});