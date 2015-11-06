//countries.js



//http://pixelhandler.com/posts/develop-a-restful-api-using-nodejs-with-express-and-mongoose
// modules =========================================================

var express = require('express');
var app = express();
//var MongoClient     = require('mongodb').MongoClient;
var mongoose = require('mongoose');
// var ObjectID = require('mongodb').ObjectID;

var bodyParser = require('body-Parser');
var router = express.Router();
var Country = require('../models/country');



//do we need this here?
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//config files
var database = require('../config/database.js');

mongoose.connect(database.url);


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
    //TODO Perhaps find a way not to display the __v
    .get(function(req, res) {

        return Country.find(function(err, countries) {
            if (!err) {
                return res.json(countries);
            } else {
                console.log(err);
                return res.status()
            }
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

    var country;
    console.log(req.body);

    country = new Country({
        name: req.body.name,
        size: req.body.size,
        population: req.body.population,
        language: req.body.language,
        donkey: req.body.donkey

    });

    country.save(function(err) {
        if (!err) {
            res.json({
                "message": "country created"
            })
            res.status(201);
            console.log("country created");
        } else {
            console.log(err);
        }
    });



});
/**
 * @api {get} /countries/:id Get Country
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
 **/

router.route('/countries/:id')

.get(function(req, res) {

    Country.findById(req.params.id, function(err, country)
    {
        if(!err)
        {
            console.log("well done, country found" + country.name);
            return res.json(country);
        }
        else{
            console.log(err);
            return res.status(404);
        }
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


   console.log(req.params.id + " | The id from req.params.id");

   //can use req.body but it still won't save things that aren't in the country model. Will save the other changes though. 
   //Doesn't feel like the right way to do it, but it's still enforcing the country schema. 
   Country.findOneAndUpdate({_id: req.params.id}, req.body,
    function(err, country)
    {
        if(!err)
        {
            console.log("Attempt to edit: " + country.name);
            res.status(200);
            return res.json({"message": country.name + " has been edited"});

        }
        else{
            console.log(err);
            res.status(500);
            return res.json({"message" : "Internal Server Error"});
        }
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
 */
.delete(function(req, res) {    

    Country.findById(req.params.id, function(err, country)
    {

        country.remove(function(err)
        {
            if(!err){
                console.log("The Country " + country.name + " has been removed");
                res.status(202);
                res.json({"message" : "Country " +  country.name + " has been removed"});
            }
            else{
                console.log(err);
            }
        });
    });
    

});



module.exports = router;