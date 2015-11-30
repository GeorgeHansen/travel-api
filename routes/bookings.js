//booking.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var router = express.Router();
var Booking = require('../models/booking');

router.route('/bookings/')
	.get(function (req,res)
	{
		   Booking.find({},' -__v',function(err, bookings) {
            if(err) {
                console.log(err);
                res.status(500);
                return res.json({"message" : "Internal Server Error"});
            }
            else
            {
                res.status(200);
                return res.json(bookings);
            }
        });
	})
	.post(function(req, res) {

	    //var country;
	    console.log(req.body);

	    var booking = new Booking({
	        username: req.body.username,
	        email: req.body.email,
	        fromDate: req.body.fromDate,
	        toDate: req.body.toDate
	           
	    });

	    booking.save(function(err)
	    {
	        if (!err) 
	        {
	            res.json({
	                "message": "booking for " + booking.username + " created"
	            });
	            res.status(201);
	            console.log("booking for " + booking.username + " created");
	        } 
	        else 
	        {
	            res.status(500);
	            return res.json({ "message": "Internal Server Error"});
	            console.log(err);
	        }
		});
	});

router.route('/booking/:id')

	.get(function(req,res)
	{

	});