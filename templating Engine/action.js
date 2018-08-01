var express=require('express');
var app=express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.send("This is demo page");
    
});
app.get("/home",function(req,res){
    res.sendfile(__dirname+"/home.html");
    
    
});
app.get('/profile/:name',function(req,res){
    var info={
        age:22,
        job:'programmer',
        hobbies:[
            'eating','Coding',
            'sleeping','travelling'
        ]
    }
    res.render('profile',{person:req.params.name,data:info});
    
});

app.listen(3000);