const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

let infoArr = [];

app.get("/", function(req, res, next){
      res.render("index", {team: infoArr, time: config.time, title: config.title, qa: config.qa}); 
})

app.post("/team",function(req, res, next){
	infoArr.push(req.body);
	console.log(JSON.stringify(req.body));
	res.redirect("/");
})

app.listen(3000, function(){
	console.log("server is running on port 3000!")
})