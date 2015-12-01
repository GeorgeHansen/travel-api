//bookings.js

var mongoose 		= require('mongoose');
var Schema			= mongoose.Schema;

var bookingSchema = new Schema({

	username: 		{  type: String, required: true},
	email: 			{  type: String, required: true},
	fromDate: 		{  type: Date, default: Date.now, required:false},
	toDate: 		{  type: Date, default: Date.now, required:false},

});


var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;