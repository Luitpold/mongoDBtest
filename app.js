var express = require("express");
var app = express();

var port = 8080;

app.set("view engine", "ejs");
app.set("views",__dirname+"/views");

app.use("/public",express.static("public"));

app.get("/",function(req,res){
  res.render("landing",{
    title : "Hello World"
  });
});

app.listen(port);
console.log("Express Server listening on "+port);
