var a=1;
var timer=setInterval(function(){
   console.log(a);
    a=a+1;
   if(a>5)
       clearInterval(timer);

},1000);
///console.log(__dirname+__filename);
