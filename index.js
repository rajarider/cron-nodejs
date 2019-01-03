var express = require("express");
var cron = require('node-schedule');


var app = express();
var port = 3003;

var date = "1 * * * * *"

cron.scheduleJob(date, function(){
    cronTesting()
});


app.listen(port, () => {
	console.log("Server listening on port " + port);
});


app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});


function cronTesting(){
    console.log(new Date(), "Somthing important is going to happen today!");
}