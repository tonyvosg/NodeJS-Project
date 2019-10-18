const express = require("express");
var app = express();
app.listen(3000, function(){
    console.log("Server started");
});

app.get("/", function(request, response){
    //console.log(request);
    response.send("<h1>Hello world!</h1>");
});

app.get("/contact", function(request, response){
    response.send("Contact me at tung007@e.ntu.edu.sg");
} )
app.get("/about", function(request, response){
    response.send("I am Joker")
})
app.get("/hobbies", function(request, response){
    response.send("<li>Coffee</li>")
})