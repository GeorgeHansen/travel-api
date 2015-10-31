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


/**
 * @api {get} /countries/ Get all Countries
 * @apiName GetAllCountries
 * @apiGroup Countries
 * @apiDescription Is used to get all the countries currently listed in the database in JSON format
 * @apiVersion 0.0.1
 *
 * @apiSuccess {ID} id ID of the country
 * @apiSuccess {String} name  Name of the Country.
 * @apiSuccess {Number} size Size of the Country. Arbitrary. 
 * @apiSuccess {Number} population Population size of the Country.
 * @apiSuccess {String} language Language they speak in the Country.
 * @apiSuccess {String} donkey Random name of a donkey.
 *
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 *
 *      "_id": "5628d0e8e4b0e09ab41e256c",
 *      "name": "Denmark",
 *       "size": ​3,
 *      "population": ​90,
 *      "language": "Danish",
 *      "donkey": "æsel"
 *  },
 *  {
 *
 *      "_id": "5628d153e4b0e09ab41e25b6",
 *      "name": "Belgium",
 *      "size": ​1,
 *      "population": ​2,
 *      "language": "Belgiumish",
 *      "donkey": "Grand Noir du Berry" 
 *
 *   }
 *   
 *]
 * @apiError (Error 5xx) 500 Internal Server Error 
 *
 */
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
     /**
     * @api {post} /countries/ Create Country
     * @apiName createCountry
     * @apiGroup Countries
     * @apiDescription Is used to create a new country. You are not bound by the parameters described in the api. 
     * New fields can be created by including them in the method body. 
     * You can essentially just add any data you want and it'll be added to the database. 
     *
     * @apiVersion 0.0.1
     * 
     * @apiParamExample {json} Post-Example:
     *    {
     *       "name" : <CountryName>,
     *       "size" : <CountrySize>,
     *       "population" : <CountryPopulation>,
     *       "language" : <CountryLanguage>,
     *       "donkey" : <CountryDonkey>,
     *     }
     *
     * @apiSuccess (Success 201) 201 Country Created
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 201 Created 
     *     Location : /countries/<ObjectId>
     *     {
     *       "message": "country added"
     *     }
     *    
     */

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
/**
 * @api {get} /api/countries/:id Get Country
 * @apiName GetCountry
 * @apiGroup Countries
 * @apiVersion 0.0.1
 * @apiDescription by supplying a countries ID you will get all information available to said country. As there is no strucutre to the db you might get different info for different countries. That depends on what you put in.
 *
 * @apiParam {ObjectId} id Countries unique ID.
 *
 * @apiSuccess {ID} id ID of the country
 * @apiSuccess {String} name  Name of the Country.
 * @apiSuccess {Number} size Size of the Country. Arbitrary. 
 * @apiSuccess {Number} population Population size of the Country.
 * @apiSuccess {String} language Language they speak in the Country.
 * @apiSuccess {String} donkey Random name of a donkey.
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *  
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *
 *      "_id": "5628d0e8e4b0e09ab41e256c",
 *      "name": "Denmark",
 *       "size": ​3,
 *      "population": ​90,
 *      "language": "Danish",
 *      "donkey": "æsel"
 *  }
 
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiError 404 Country Not Found
 *
 * @apiError (Error 5xx) 500 Internal Server Error 
 */
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
                            "msg": "404 country not found"
                        });
                    } else {
                        res.status(200); //ok
                        res.json(result);

                    }

                    db.close();

                });
        });
    })
/**
 * @api {put} countries/:id Update Country
 * @apiName UpdateCountry
 * @apiGroup Countries
 * @apiVersion 0.0.1
 * @apiDescription Can update a specific country by supplying it's ID. In the method body include the fields you want updated. Only supplying the field you want updated will not delete the other fields. 
 *
 * @apiParam {ObjectId} id Country unique ID.
 *
 * @apiSuccess (Success 201) 201 Country Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created 
 *     Location : country/<ObjectId>
 *     {
 *       "message": "Country edited"
 *     }
 * 
 */
    .put(function(req, res) {
        MongoClient.connect(database.url, function(err, db) {

            var collection = db.collection('countries');

            collection.update(
            {
                '_id': ObjectID(req.params.id)
                }, {
                    $set: req.body
                },

                function(err, result) {
                    // response to the browser

                    

                    res.status(201);
                    res.location(/countries/ + ObjectID(req.params.id));
                    res.json({
                        "message": "Country edited"
                    });
                    db.close();
                });
        });
    })
    /**
     * @api {delete} countries/:id Delete Country
     * @apiName DeleteCountry
     * @apiGroup Countries
     * @apiVersion 0.0.1
     * @apiDescription Deletes the country with the ID specified
     *
     * @apiParam {ObjectId} id Country unique ID.
     *
     * @apiSuccess (Success 202) 202 Accepted
     *


     *
     */
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







module.exports = router;