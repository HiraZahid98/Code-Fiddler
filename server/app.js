const express = require('express');
var mysql = require('mysql');
const app = express();


app.get('/', (req,res)=>{
    res.send("Hello Wrold");
})

app.listen(3000,()=>{
    console.log("Server is running");

})

var con = mysql.createConnection({
    host: "localhost",
    user: "teamTracker",
    password: "yourpassword"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });