var PythonShell = require('python-shell');
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

//Deploy app on server
var port = process.env.PORT || 4000;
var server = app.listen(port, function () {
	console.log('listening to request on port 4000')
});
