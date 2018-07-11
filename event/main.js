var events=require('events');//nodeJs has many built in core module ,here events is built in module

var myEmitter=new events.EventEmitter();//here EventEmitter is built in function which is a function on events module

myEmitter.on("sevent",function(){//here we create a custom event called sevent
    
    console.log("event being called");
});

myEmitter.emit('sevent');//here emit is built in event