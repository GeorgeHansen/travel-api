//bookings.js

var mongoose 		= require('mongoose');
var Schema			= mongoose.Schema;

var bookingSchema = new Schema({

	username: 		{  type: String, required: true},
	email: 			{  type: String, required: true},
	fromDate: 		{  type: String, required:false},
	toDate: 		{  type: String, required:false},

});


var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;