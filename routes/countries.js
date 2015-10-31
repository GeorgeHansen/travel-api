//countries.js

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var bodyParser = require('body-Parser');
var router = express.Router();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//config files
var database = require('../config/database.js');



router.route('/countries')
    .get(function(req, res) {
        MongoClient.connect(database.url, function(err, db) {
            if (err) {
                res.status(500).send({
                    "message": "Internal Server Error"
                });
            }

            var collection = db.collection('countries');

            collection.find().toArray(function(err, result) {
                res.json(result);
            });



        });
    })
    .post(function(req, res) {
        MongoClient.connect(database.url, function(err, db) {

            var collection = db.collection('countries');

            collection.insert(req.body, function(err, result) {

                res.status(201);

                res.location(/countries/ + result.insertedIds.toString()); //what does this do?

                res.json({
                    "message": "country added"
                });
                db.close();

            });
        });

    });

router.route('/countries/:id')
    .get(function(req, res) {

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
                    } else if (result === null) {
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
    })
    .put(function(req, res) {
        MongoClient.connect(database.url, function(err, db) {

            var collection = db.collection('countries');

            collection.update({
                    '_id': ObjectID(req.params.id)
                }, {
                    $set: req.body
                },

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
    })
    .delete(function(req, res) {
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






//delete country


module.exports = router;