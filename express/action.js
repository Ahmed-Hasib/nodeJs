var expresss=require('express');
var app=expresss();
app.get('/',function(req,res){
    
    res.sendfile(__dirname+'/home.html');
});
app.get('/home',function(req,res){
    res.send("This is home page");
    
});
app.get('/user/:id',function(req,res){
    res.send("This is home page"+req.params.id);
    
});

app.listen(3000);