const express = require("express");
const http = require('http');
const https = require('https');

const login = require("./login.js");
const config = require("./config.js");

if(process.argv.length > 2){ // If there are any arguments
  for(i=2;i<process.argv.length;i++){ // Loop through all the
    if(process.argv[i]=="-c"||process.argv[i]=="--config"){ // Set the config file path
      config.file = process.argv[i+1];
      i++; // Make it skip the next argument as it is the file path
    }else{ // Else if command is not found
      if(!process.argv[i]=="-h"&&!process.argv[i]=="--help"){ // If it is not either of the help commands say that argument is not valid
        console.log("Error: Argument \""+process.argv[i]+"\" not vaild.\n");
      }
      console.log("Help for Mine Hoster");
      if(process.argv[i]=="-h"||process.argv[i]=="--help"){
        process.exit(0); // Exit with sussesful sate
      }else{
        process.exit(1); // Exit with error state
      }
    }
  }
}



const app = express();

app.use(express.static("public")); // serve static file

app.get("/", function (req, res) {
  res.redirect("login");
});

app.get("/login", function (req, res) {
  login.displayLogin(req, res);
});


http.createServer(app).listen(8080);
/*app.listen(8080, function () {
  console.log("App listening on port 8080!");
});*/
