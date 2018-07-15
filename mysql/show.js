var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"" ,
    database:"simple"
});
con.connect(function(err){
    if(err){
        console.log("Not connected");     
    }
    
    
    con.query("SELECT * FROM person",function(err,rows){
    if(err)
            {
                        console.log(err);

            }
      else
      {
             rows.forEach(function(result){
                 console.log(result.name);
                 
             });

      }    
    
   });
    
});
