var event=require('events');
var myEmitter=new event.EventEmitter();

myEmitter.on("someEvent",function(msg){
    console.log(msg);
    
});
myEmitter.emit('someEvent',"Does it work??");