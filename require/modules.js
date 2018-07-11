var one=function(){
    
    return "This is fist function";
}
var two=function(){
    return "This is second function";
}
var adder=function(a,b){
    var c=a+b;
    return `Sum of a and b is : ${a+b}`;
    
}

//normal way to save in object
//module.exports.one=one;
//module.exports.adder=adder;
//module.exports.two=two;
//another way to save in object
module.exports={
    one:one,
    two:two,
    adder:adder
    
}