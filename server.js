//server.js

//Will want to have a look at this tutorial later. 
//https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application


// modules =========================================================
var express 		= require('express');
var app 			= express();
var mongoClient = require('mongodb').MongoClient;

//config files
var database = require('./config/database');

//app port
var port = process.env.PORT || 3000;

app.get('/',function(request, response){

	response.send("Hello ");
 
});

app.get('/countries', function(req,res)
{
	mongoClient.connect(database, function(err, db)
	{
		var collection = db.collection('countries');

		collection.find().toArray(function(err,result)
		{
			res.json(result);
		});

		

	});
})
app.listen(port);


//