//tracks.js


// modules =========================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var router = express.Router();
var Country = require('../models/country');
var Track = require('../models/track');

//do we need this here? Maybe not. COMMENT OUT!!!
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

//config files
var database = require('../config/database.js');

//really need to learn how I should be disconnecting from the db. is it done automatically?

/**
 * @api {get} /tracks/ Get all Tracks
 * @apiName GetAlltracks
 * @apiGroup Tracks
 * @apiDescription Is used to get all the tracks currently listed in the database in JSON format. 
 * Tracks contain a reference to the country they belong to. Not all tracks have been added to countries.
 *
 * @apiVersion 0.1.0
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

 * @apiError (Error 5xx) 500 Internal Server Error 
 **/
router.route('/tracks')

    .get(function(req, res) {

       	Track.find(function(err, tracks) {
            if(err) {
                console.log(err);
                res.status(500);
                return res.json({"message" : "Internal Server Error"});
            }
            else{
            	console.log("Here you go, a list of all tracks");
            	res.json(tracks);
            }
        });
    });


/**
 * @api {get} /tracks/:id Get Track
 * @apiName GetTrack
 * @apiGroup Tracks
 * @apiVersion 0.2.0
 * @apiDescription by supplying a tracks ID you will get all information available to said track. 

 *
 * @apiParam {ObjectId} id Tracks unique ID.
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
 * @apiError 404 Track Not Found
 *
 * @apiError (Error 5xx) 500 Internal Server Error 
 **/
router.route('/tracks/:id/')

    .get(function(req, res)
    {
        Track.findOne({_id : req.params.id}, function(err,track)
        {
            
            if(!track)
            {
                res.status(404);
                return res.json({"message" : "Track not found"});
            }
            else if(err)
            {
                console.log(err);
                res.status(500);
                return res.json({"message" : "Internal Server Error"});
            }
            else{
                res.status(200);
                res.json(track);
            }

        });
    });


//router.route('/tracks/:sport')



module.exports = router;