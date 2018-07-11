var fs=require('fs');
var myRreadStream=fs.createReadStream(__dirname+"/text.txt",'utf8');
var myWriteSteam=fs.createWriteStream(__dirname+"/write.txt");
myRreadStream.on('data',function(chunk){
    console.log(chunk);
    myWriteSteam.write(chunk);
});