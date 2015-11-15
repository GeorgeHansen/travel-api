//countries.js



//http://pixelhandler.com/posts/develop-a-restful-api-using-nodejs-with-express-and-mongoose
// modules =========================================================

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var router = express.Router();
var Country = require('../models/country');
var Track = require('../models/track');



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
 * @apiDescription Is used to get all the countries currently listed in the database in JSON format. 
 * Tracks are stored in the DB as a reference but the tables are joined and data displayed as part of the country.
 * Donkey's have been removed. Description and Tracks added. You can now store multiple Languages per country. 
 * @apiVersion 0.1.0
 *
 * @apiSuccess {ID} id ID of the country
 * @apiSuccess {String} name  Name of the Country.
 * @apiSuccess {Number} size Size of the Country. Arbitrary. 
 * @apiSuccess {Number} population Population size of the Country.
 * @apiSuccess {String[]} languages Languages they speak in the Country.
 * @apiSuccess {String} description Short Description of the Country.
 * @apiSuccess {Object[]} tracks contains the track objects related to this country. 
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 *
 *      "_id": "5628d0e8e4b0e09ab41e256c",
 *      "name": "Denmark",
 *      "size": ​3,
 *      "population": ​90,
 *       "description": "This is Denmark. The flag is pretty nifty. The weather a bit drifty. but give the people a fifty and they'll look at you shifty.",
 *      "languages": ["Danish", "Swedish"],
 *      "tracks" : [{
 *          "_id": "56436159e4b0ecb0579e3913",
 *          "sport": "Biking",
 *          "trackName": "fynskoven",
 *          "trackType": "Forest",
 *          "region": "Fyn",
 *          "trackRating": ​8,
 *          "km": ​36
 *
 * }]
 *
 *
 * @apiError (Error 5xx) 500 Internal Server Error 
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "message" : "Internal Server Error"
 *      }
 */
router.route('/countries')
    
    .get(function(req, res) {

       //Don't need the info for tracks available here. Will keep tracks in the countries to make
       //querying them easier. 
       Country.find({},'name size population description languages imageLocation',function(err, countries) {
            if(err) {
                console.log(err);
                res.status(500);
                return res.json({"message" : "Internal Server Error"});
            }
            else
            {
                return res.json(countries);
            }
        });

        // .populate('tracks')
        // .exec(function(err, tracks)
        // {
        //     if(err){console.log(err);}
        //     else{
                
        //         return res.json(tracks); 
        //     }

        // });

    })
    /**
     * @api {post} /countries/ Create Country
     * @apiName createCountry
     * @apiGroup Countries
     * @apiDescription Is used to create a new country. 
     * Fields other than those specified can be entered into the body but will not be saved to the database.
     *
     * @apiVersion 0.0.2
     * @apiParam {String} name          Mandatory country name
     * @apiParam {Number} size          Mandatory country size
     * @apiParam {Number} population    Mandatory country population size
     * @apiParam {String} language      Mandatory country main language
     * @apiParam {String} [donkey]      Optional  country donkey  
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
     * @apiError (Error 5xx) 500 Internal Server Error 
     * @apiErrorExample {json} Error-Response:
     *      HTTP/1.1 500 Internal Server Error
     *      {
     *          "message" : "Internal Server Error"
     *      }
     *    
     */

.post(function(req, res) {

    var country;
    console.log(req.body);

    country = new Country({
        name: req.body.name,
        size: req.body.size,
        population: req.body.population,
        languages: req.body.languages,
        description: req.body.description,
        tracks: req.body.tracks,
        imageLocation: req.body.imageLocation     

    });

    country.save(function(err)
    {
        if (!err) 
        {
            res.json({
                "message": "country created"
            });
            res.status(201);
            console.log("country created");
        } 
        else 
        {
            res.status(500);
            return res.json({ "message": "Internal Server Error"});
            console.log(err);
        }
    });



});
/**
 * @api {get} /countries/:id Get Country
 * @apiName GetCountry
 * @apiGroup Countries
 * @apiVersion 0.1.0
 * @apiDescription by supplying a countries ID you will get all information available to said country. 
 * update includes adding an array of languages. A description for the country and a list of tracks available
 * for that country
 *
 * @apiParam {ObjectId} id Countries unique ID.
 *
 * @apiSuccess {ID} id ID of the country
 * @apiSuccess {String} name  Name of the Country.
 * @apiSuccess {Number} size Size of the Country. Arbitrary. 
 * @apiSuccess {Number} population Population size of the Country.
 * @apiSuccess {String[]} language Array of Languages they speak in that Country.
 * @apiSuccess {String} donkey Random name of a donkey.
 * @apiSuccess {Object[]} tracks contains the track objects related to this country. 
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *  
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 *
 *      "_id": "5628d0e8e4b0e09ab41e256c",
 *      "name": "Denmark",
 *      "size": ​3,
 *      "population": ​90,
 *       "description": "This is Denmark. The flag is pretty nifty. The weather a bit drifty. but give the people a fifty and they'll look at you shifty.",
 *      "languages": ["Danish", "Swedish"],
 *      "tracks" : [{
 *          "_id": "56436159e4b0ecb0579e3913",
 *          "sport": "Biking",
 *          "trackName": "fynskoven",
 *          "trackType": "Forest",
 *          "region": "Fyn",
 *          "trackRating": ​8,
 *          "km": ​36
 *
 * }] 
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiError 404 Country Not Found
 *
 * @apiError (Error 5xx) 500 Internal Server Error 
 **/

router.route('/countries/:id')

.get(function(req, res) {

    var country;

    //can simply select the fields by typing them, or disclude fields by typing the - in front of the field name. 
    Country.findOne({_id : req.params.id},'-tracks', function(err,country)
    {
        if(err){
            console.log(err);
            res.status(404);
            return res.json({"message " : "Country not found"})
        }
        else{
            res.json(country);
        }
    })
    //Currently the tracks in the country is filled with objectId references. The populate method
    //will perform an application level join and fill the array with track objects. 
    //Essentially it joins the collections and selects everything from the two tables. 
    // .populate('tracks')
    // .exec(function(err, track)
    // {
    //     if(err){console.log(err);}
    //     else{
    //         console.log("country selected " + track.name);
    //         //this is somewhat misleading. It will return the country + the data from the tracks. 
    //         return res.json(track); 
    //     }

    // });
})

    /**
     * @api {put} countries/:id Update Country
     * @apiName UpdateCountry
     * @apiGroup Countries
     * @apiVersion 0.0.2
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
     *       "message": "<countryName> has been edited"
     *     }
     *
     * @apiError (Error 5xx) 500 Internal Server Error 
     * @apiErrorExample {json} Error-Response:
     *      HTTP/1.1 500 Internal Server Error
     *      {
     *          "message" : "Internal Server Error"
     *      }
     * 
     */

.put(function(req, res) {


   console.log(req.params.id + " | The id from req.params.id");

   //can use req.body but it still won't save things that aren't in the country model. Will save the other changes though. 
   //Doesn't feel like the right way to do it, but it's still enforcing the country schema. Sort of like
   //throwing stuff against the wall to see what sticks. Probably a horrible idea :p

  //When updating the language field do we need to be careful that the old languages will be erased?

   Country.findOneAndUpdate({_id: req.params.id}, req.body,
    function(err, country)
    {
        if(!err)
        {
            console.log("Attempt to edit: " + country.name);
            res.status(201);
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
 * @apiVersion 0.0.2
 * @apiDescription Deletes the country with the ID specified
 *
 * @apiParam {ObjectId} id Country unique ID.
 *
 * @apiSuccess (Success 202) 202 Accepted
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 202 Created 
 *     Location : country/<ObjectId>
 *     {
 *       "message": "Country <countryName> has been removed"
 *     }
 *
 * @apiError (Error 5xx) 500 Internal Server Error 
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "message" : "Internal Server Error"
 *      }
 */
.delete(function(req, res) {    

    Country.findById(req.params.id, function(err, country)
    {
        //will this ever be called?
        if(country === null)
        {
            res.status(404);
            return res.json({"message" : "country not found"});
        }
        else if(err)
        {
            console.log(err);
            res.status(500);
            return res.json({"message" : "Internal Server Error"});
        }
        
        else
        {
            country.remove(function(err)
            {
                if(!err)
                {
                    console.log("The Country " + country.name + " has been removed");
                    res.status(202);
                    res.json({"message" : "Country " +  country.name + " has been removed"});
                }
                else
                {
                    console.log(err);
                }
            });
        }

        
    });

});

router.route('/countries/:id/tracks')
    
    .get(function(req,res)
    {
        console.log(req.params.id);
        // Track.where('track.countryId')
        // .equals(req.params.id)
        // .exec(function(err,tracks)
        // {
        //     if(err)
        //     {
        //         return res.json(err);
        //     }
        //     else{
        //         return res.json(tracks);
        //     }
        // });

         Track.find({countryId : req.params.id }, function(err, tracks)
         {
            if(err)
            {
                return res.json(err);
            }
            else{
                return res.json(tracks);
            }
         });


    });

router.route('/countries/:id/:sport/tracks')
    
    .get(function(req,res)
    {
        console.log(req.params.id);
        console.log(req.params.sport);
        
        Track.find({
           sport: req.params.sport,
           countryId : req.params.id 
        },
        function(err, tracks)
        {
            if(err)
            {
                return res.json(err);
            }
            else{
                return res.json(tracks);
            }
        });
    });



module.exports = router;