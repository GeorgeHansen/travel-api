//server.js

//Will want to have a look at this tutorial later. 
//https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application


// modules =========================================================
var express 		= require('express');
var app 			= express();
var MongoClient = require('mongodb').MongoClient;
//var mongoose = require('mongoose');

//config files
var database = require('./config/database.js');



//app port
var port = process.env.PORT || 3000;

app.get('/',function(request, response){

	response.send("Hello ");
 
});

app.get('/countries', function(req,res)
{
	MongoClient.connect(database.url, function(err, db)
	{
		if(err)
		{
			console.log(err);
		}
	
		var collection = db.collection('countries');		

		collection.find().toArray(function(err,result)
		{
			res.json(result);
		});

		

	});
})

app.listen(port);


//