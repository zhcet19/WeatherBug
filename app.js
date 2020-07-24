var express= require("express");
var bodyParser= require("body-parser");
const request = require('request');
var moment = require('moment');

var app= express();
app.set("view engine","ejs");

app.use(express.static(__dirname +"/public"));

app.get("/",function(req,res){
	res.render("landing");
});
app.get("/index",function(req,res){
	res.render("index");
})
app.get("/results", function(req, res){
    var query = req.query.city
	var url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=f39451f5e1456eaf3ae6416c3562b371"
  
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
			console.log(data)
			
            res.render("results", {data: data});
        }
    });
});

app.listen(3000, function(){
  console.log("Welcome you to WeatherBug");
});
	;