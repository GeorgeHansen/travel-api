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
 * Tracks are no longer stored in countries. Instead you can find a reference to the country it belongs to in /tracks
 * Donkey's have been removed. Description and Imagelocation added. You can store multiple Languages per country. 
 * @apiVersion 0.2.0
 *
 * @apiSuccess {ID} id ID of the country.
 * @apiSuccess {String} name  Name of the Country.
 * @apiSuccess {Number} size Size of the Country in km2. 
 * @apiSuccess {Number} population Number of people living in the country.
 * @apiSuccess {String} description Short Description of the Country.
 * @apiSuccess {String} Location of the countries flag on the server. 
 * @apiSuccess {String[]} languages Languages they speak in the Country.
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 * 
 *   "_id": "5628d0e8e4b0e09ab41e256c",
 *  "name": "Denmark",
 *  "size": ​42915,
 *   "population": ​5678348,
 *  "description": "This is Denmark. The flag is pretty nifty. The weather a bit drifty. but give the people a fifty and they'll look at you shifty. Test ",
 *   "imageLocation": "http://travel-project.azurewebsites.net/img/countries/denmark-flag.jpg",
 *   "languages": 
 *
 *   [
 *       "Danish"
 *   ]
 *
 *   }
 * ]
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


       //Have tracks in the schema from a previous version. We don't want to display them.
       //A better solution would be to use the version key mongoose uses.
       //This way we'd only display countries from a certain db version.  
       Country.find({},'-tracks -__v',function(err, countries) {
            if(err) {
                console.log(err);
                res.status(500);
                return res.json({"message" : "Internal Server Error"});
            }
            else
            {
                res.status(200);
                return res.json(countries);
            }
        });


        

    })
    /**
     * @api {post} /countries/ Create Country
     * @apiName createCountry
     * @apiGroup Countries
     * @apiDescription Is used to create a new country. 
     * Image location is currently not saved to the db.
     *
     * @apiVersion 0.2.0
     * @apiParam {String} name              Mandatory country name
     * @apiParam {Number} size              Mandatory country size
     * @apiParam {Number} population        Mandatory country population size
     * @apiParam {String} [description]     Optional  description of country  
     * @apiParam {String[]} languages       Mandatory languages spoken in country
     * @apiParam {String} [imageLocation]   Optional path to countries flag on server
     * 
     *      
     * @apiParamExample {json} Post-Example:
     *    {
     *       "name" : USA,
     *       "size" : 9857306,
     *       "population" : 322014853,
     *       "imageLocation" : http://travel-project.azurewebsites.net/img/countries/usa-flag.jpg
     *       "description" : This is a pretty cool country pretty far away from quite a few things. Rumoured to have dragons.,
     *       "languages" : [English, Spanish],
     *     }
     *
     * @apiSuccess (Success 201) 201 Country Created
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 201 Created 
     *     Location : /countries/<ObjectId>
     *     {
     *       "message": "country :countryName created"
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
        imageLocation: req.body.imageLocation     

    });

    country.save(function(err)
    {
        if (!err) 
        {
            res.json({
                "message": "country " + country.name + " created"
            });
            res.status(201);
            console.log("country " + country.name + " created");
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
 * @apiVersion 0.2.0
 * @apiDescription by supplying a countries ID you will get all information available to said country. 
 * Currently that is, name, population, size a description, languages and an image path for that country
 *
 * @apiParam {ObjectId} id Countries unique ID.
 *
 * @apiSuccess {ID} id ID of the country
 * @apiSuccess {String} name  Name of the Country.
 * @apiSuccess {Number} size Size of the Country in km2 
 * @apiSuccess {Number} population Number of people living in the country 
 * @apiSuccess {String} description Short Description of the Country.
 * @apiSuccess {String} Location of the countries flag on the server. 
 * @apiSuccess {String[]} languages Languages they speak in the Country.
 *
 *  
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 * 
 *   "_id": "5628d0e8e4b0e09ab41e256c",
 *   "name": "Denmark",
 *   "size": ​42915,
 *   "population": ​5678348,
 *   "description": "This is Denmark. The flag is pretty nifty. The weather a bit drifty. but give the people a fifty and they'll look at you shifty. Test ",
 *   "imageLocation": "http://travel-project.azurewebsites.net/img/countries/denmark-flag.jpg",
 *   "languages": 
 *
 *   [
 *       "Danish"
 *   ]
 *
 *   }
 * ]
 *
 * @apiError 404 Country Not Found
 *
 * @apiError (Error 5xx) 500 Internal Server Error 
 **/

router.route('/countries/:id')

.get(function(req, res) {


    //can simply select the fields by typing them, or disclude fields by typing the - in front of the field name. 
    Country.findOne({_id : req.params.id},'-tracks -__v', function(err,country)
    {
        if(!country){
            console.log(err);
            res.status(404);
            return res.json({"message " : "Country not found"})
        }
        else if(err)
        {
            console.log(err);
            res.status(500);
            return res.json({"message " : "Internal Server Error"});
        }
        else{
            res.status(200);
            res.json(country);
        }
    })

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
     * @apiVersion 0.2.0
     * @apiDescription Can update a specific country by supplying it's ID. In the method body include the fields you want updated. Only supplying the field you want updated will not delete the other fields. 
     * ImageLocation still doesn't work
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
     * @apiError (Error 404) 404 Country Not found 
     * @apiErrorExample {json} Error-Response:
     *      HTTP/1.1 404 Country not found
     *      {
     *          "message" : "Country not found"
     *      }
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
        //apparently a better way to check if there is nothing here. !country will include both null and undefined
        //as well as empty string, 0 NaN and false.
        if(!country)
        {
            res.status(404);
            return res.json({"message" : "404 country not found"});
        }
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
 *
 * @apiSuccess {ID} id ID of the track.
 * @apiSuccess {String} sport The sport for this track.
 * @apiSuccess {String} trackName Name of the Track. 
 * @apiSuccess {String} trackType The type of track, it's terrain.
 * @apiSuccess {String} region Region the track is located in.
 * @apiSuccess {Number} trackRating Rating for this track. 
 * @apiSuccess {Number} km Distance in kms for this track

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 202 Created 
 *     L
 *
 * @apiError (Error 5xx) 500 Internal Server Error 
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "message" : "Internal Server Error"
 *      }
 * @apiError (Error 404) 404 Country Not found 
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 404 Country not found
 *      {
 *          "message" : "Country not found"
 *      }
 */
.delete(function(req, res) {    

    Country.findById(req.params.id, function(err, country)
    {
        
        if(!country)
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
                    res.status(500);
                    res.json({"message" : "Country " +  country.name + " could not be removed"});
                    console.log(err);
                }
            });
        }

        
    });

});


/**
 * @api {get} countries/:countryId/tracks Get all tracks per country
 * @apiName GetCountryTracks
 * @apiGroup Countries
 * @apiVersion 0.2.0
 * @apiDescription Gets all the Tracks from the specified country
 *
 * @apiSuccess {ID} id ID of the track
 * @apiSuccess {String} sport Name of the sport for the track.
 * @apiSuccess {String} trackName Name of the track. 
 * @apiSuccess {String} trackType The type of track/terrain. 
 * @apiSuccess {String} region Region the track is in in the country.
 * @apiSuccess {Number} trackRating Rating for a given track. 
 * @apiSuccess {Number} km Distance of the track in km.
 * @apiSuccess {ObjectId} countryId ID of the country this track belongs to. 
 *
 * @apiParam {ObjectId} id Country unique ID.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * [
 *   "_id": "56431d40e4b0ecb0579e31df",
 *  "sport": "Biking",
 *  "trackName": "Somewhere",
 *  "trackType": "City",
 *  "region": "Testing",
 *  "trackRating": ​5,
 *  "km": ​201,
 *  "countryId": "5628d0e8e4b0e09ab41e256c"
 * ]
 *
 * @apiError (Error 5xx) 500 Internal Server Error  
 * @apiError (Error 404) 404 Country Not found 

 */
router.route('/countries/:id/tracks')

    .get(function(req,res)
    {
               
        Track.find(
            {countryId : req.params.id },

        function(err, tracks)
        {
            if(!tracks)
            {
                res.status(404);
                return res.json({"message" : "404 no tracks found"});
            }
            if(err)
            {
                res.status(500);
                return res.json({"message" : "Internal Server Error"});
                
            }
            else{
                res.status(200);
                return res.json(tracks);
            }
        });


    });

/**
 * @api {get} countries/:countryId/:sport/tracks Countries tracks for a sport
 * @apiName GetCountryTracksForSport
 * @apiGroup Countries
 * @apiVersion 0.2.0
 * @apiDescription Gets all the Tracks from the specified country from the specified sport
 *
 * @apiParam {ObjectId} id Country unique ID.
 *
 * @apiSuccess {ID} id ID of the track
 * @apiSuccess {String} sport Name of the sport for the track.
 * @apiSuccess {String} trackName Name of the track. 
 * @apiSuccess {String} trackType The type of track/terrain. 
 * @apiSuccess {String} region Region the track is in in the country.
 * @apiSuccess {Number} trackRating Rating for a given track. 
 * @apiSuccess {Number} km Distance of the track in km.
 * @apiSuccess {ObjectId} countryId ID of the country this track belongs to. 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * [
 *   "_id": "56431d40e4b0ecb0579e31df",
 *  "sport": "Biking",
 *  "trackName": "Somewhere",
 *  "trackType": "City",
 *  "region": "Testing",
 *  "trackRating": ​5,
 *  "km": ​201,
 *  "countryId": "5628d0e8e4b0e09ab41e256c"
 * ]
 *
 * @apiError (Error 5xx) 500 Internal Server Error  
 * @apiError (Error 404) 404 Country Not found 

 */
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