var fs=require('fs'); //here fs is nodejs's built in core module..
var readme=fs.readFileSync("read.txt","utf8");//here readFileSync is core funciton from fs;
console.log(readme);

fs.writeFileSync("write.txt","Hi i am try to learn how to write file using nodejs");

var writeme=fs.readFileSync("write.txt","utf8");
console.log(writeme);
console.log("last msg");