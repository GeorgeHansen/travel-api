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

//really need to learn how I should be disconnecting from the db. 
//mongoose.connect(database.url);

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

router.route('/tracks/:id/')

    .get(function(req, res)
    {
        Track.findOne({_id : req.params.id}, function(err,track)
        {
            if(err)
            {
                console.log(err);
                res.status(500);
                return res.json({"message" : "Internal Server Error"});
            }
            else{
                res.json(track);
            }

        });
    });

router.route('/tracks/country/:countryId/')

    .get(function(req, res)
    {
        Track.find({}).select({"countryId" : req.params.countryId})
        .exec(function(err,tracks)
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