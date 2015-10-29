//server.js

//Will want to have a look at this tutorial later. 
//https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application


// modules =========================================================
var express 		= require('express');
var app 			= express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-Parser');
var router = express.Router();


var ObjectID = require('mongodb').ObjectID;
//config files
var database = require('./config/database.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//app port
var port = process.env.PORT || 3000;

//router.route('/countries/').get or post or put or what have you

app.get('/',function(request, response){

	response.send("Hello ");
 
});

//get list
app.get('/countries', function(req,res)
{
	MongoClient.connect(database.url, function(err, db)
	{
		if(err)
		{
			res.status(500).send({"message" : "Internal Server Error"});
		}
	
		var collection = db.collection('countries');		

		collection.find().toArray(function(err,result)
		{
			res.json(result);
		});

		

	});
});

//get specific country
app.get('/countries/:id', function(req, res)
{

    MongoClient.connect(database.url, function(err, db) {

        if (err) {
            res.status(500).send({
                "message": "Internal Server Error"
            });
        };

        var collection = db.collection('countries');

        collection.findOne({
            '_id': ObjectID(req.params.id)
        }, 
        function(err, result) {

            if (err) {
                res.status(500).send({
                    "message": "Internal Server Error"
                });
            }
            else if (result === null) {
                res.status(404).send({
                    "msg": "404"
                });
            } else {
                res.status(200); //ok
                res.json(result);

            }

            db.close();

        });
    });
});

//update country
app.put('/countries/:id', function(req, res)
{
	MongoClient.connect(database.url, function(err, db) 
    {

        var collection = db.collection('countries');

        collection.update(
            {'_id': ObjectID(req.params.id)},
            {$set:req.body},

            function(err, result) {
                // response to the browser

                console.log(req.body);
                
                res.status(201);
                res.location(/countries/ + ObjectID(req.params.id));
                res.json({
                    "message": "edited country"
                });
                db.close();
            });
        
        
    });
});

//create country
app.post('/countries/', function(req,res)
{
	MongoClient.connect(database.url, function(err,db){

        var collection = db.collection('countries');

        collection.insert(req.body, function(err, result) {

            res.status(201);

            res.location(/countries/ + result.insertedIds.toString());  //what does this do?

            res.json({
                "message": "country added"
            });
            db.close();

        });
    });

});

//delete country
app.delete('/countries/:id', function(req,res)
{
    MongoClient.connect(database.url, function(err, db) {

        var collection = db.collection('countries');
        collection.remove({
            '_id': ObjectID(req.params.id)
            }, function(err, result) {
                res.status(202);
                res.json({
                    'message': 'country deleted'
                });
                db.close();
            });
    });
});

//module.exports(router);

app.listen(port);



//