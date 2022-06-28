const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");
var fs = require('fs');
const path = require("path");



const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
   
app.get("/", function(req, res) {
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
    const Fname = req.body.fName;
    const LName = req.body.lName;
    const Email = req.body.emailId;

    if(res.statusCode==200){
      res.sendFile(__dirname +"/success.html");
  
    }
    else{
      res.sendFile(__dirname +"/failure.html");
    }
   
  
    
})







app.listen(3000, function(){
    console.log("server is running on port 3000");
})

//api key 1dff4dbcaaea1ce6f0120dbd98ae1b5e-us9
//audience id   6c51298c45