var PythonShell = require('python-shell');
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var firebase = require('firebase');
var fireapp = firebase.initializeApp({ 
  apiKey: "AIzaSyDqTKSOn-SOQ_PMYH4icT5LfswQFwPqiUM",
  authDomain: "hackathon-4febb.firebaseapp.com",
  databaseURL: "https://hackathon-4febb.firebaseio.com",
  projectId: "hackathon-4febb",
  storageBucket: "hackathon-4febb.appspot.com",
  messagingSenderId: "22239613539"  
});

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req,res){
 res.render('index');
});

app.get("/customer/:id", function(req,res){
  var userQuery=firebase.database().ref('users');
  const query=userQuery.orderByChild('name').equalTo(req.params.id);
  console.log(req.params.id);
  query.on('value',snap=>{
      console.log(snap.val());
      user=snap.val();
      res.render('customer',{user:user})
  });	
});

app.get("/add", function(req,res){
  res.render('add');
});

app.get("/upload_customer", function(req,res){
  res.render('upload_customer');
});


//Deploy app on server
var port = process.env.PORT || 4000;
var server = app.listen(port, function () {
	console.log('listening to request on port 4000')
});
