var PythonShell = require('python-shell');
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var firebase = require('firebase');
var app = firebase.initializeApp({ 
  apiKey: "AIzaSyDqTKSOn-SOQ_PMYH4icT5LfswQFwPqiUM",
  authDomain: "hackathon-4febb.firebaseapp.com",
  databaseURL: "https://hackathon-4febb.firebaseio.com",
  projectId: "hackathon-4febb",
  storageBucket: "hackathon-4febb.appspot.com",
  messagingSenderId: "22239613539"  
});

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/:id", function(req,res){
  var userQuery=firebase.database().ref('users');
  const query=userQuery.orderByChild('name').equalTo(req.params.id);
  query.on('value',snap=>{
      console.log(snap.val());
      user=snap.val();
      res.render('index',{user:user})
  });	
});

//Deploy app on server
var port = process.env.PORT || 4000;
var server = app.listen(port, function () {
	console.log('listening to request on port 4000')
});
