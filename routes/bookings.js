//booking.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var router = express.Router();
var Booking = require('../models/booking');

/**
 * @api {get} /bookings/ Get all Bookings
 * @apiName GetAllBookings
 * @apiGroup Bookings
 * @apiDescription Is used to get all the bookings currently in the database in JSON format. Just quickly threw something up there to have it. Dates are a little weird atm. You can leave them blank for the current date

 * @apiVersion 0.2.0
 *
 * @apiSuccess {ID} id ID of the booking.
 * @apiSuccess {String} username  Username of the person doing the booking.
 * @apiSuccess {String} email email address for person doing the booking. 
 * @apiSuccess {Date} fromDate. Date booking starts from
 * @apiSuccess {Date} toDate Date booking ends.
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * [
 *   {
 * 
 *
 *  "_id": "565d82e58eaa68c014dc550e",
 *  "username": "Test",
 *  "email": "test@test.com",
 *  "toDate": "2015-12-01T11:22:41.239Z",
 *  "fromDate": "2015-12-01T11:22:41.239Z"
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
router.route('/bookings/')
	.get(function (req,res)
	{
		   Booking.find({},' -__v',function(err, bookings) 
		   {
	            if(err) 
	            {
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
	 /**
     * @api {post} /bookings/ Create Booking
     * @apiName createBooking
     * @apiGroup Bookings
     * @apiDescription Is used to create a new booking. 
     * Dates are optional. If nothing is entered current date will be used. 
     *
     * @apiVersion 0.2.0
     * @apiParam {String} username          Mandatory userName for booking
     * @apiParam {String} email             Mandatory userEmail for booking
     * @apiParam {Date} [fromDate]        	Optional starting date for booking
     * @apiParam {String} [toDate]     		Optional  ending date for booking
     * 
     *      
     * @apiParamExample {json} Post-Example:
	 * [
	 *   {
	 * 
	 *
	 *  "_id": "565d82e58eaa68c014dc550e",
	 *  "username": "Test",
	 *  "email": "test@test.com",
	 *  "toDate": "2015-12-01T11:22:41.239Z",
	 *  "fromDate": "2015-12-01T11:22:41.239Z"
	 *
	 *   }
	 * ]
     *   
     */
	.post(function(req, res) 
	{

	    var booking;
	    //console.log(req.body);

	   booking = new Booking({
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
	                "message": "booking for"
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




module.exports = router;