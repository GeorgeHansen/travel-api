//bookings.js

var mongoose 		= require('mongoose');
var Schema			= mongoose.Schema;

var bookingSchema = new Schema({

	username: 		{  type: String, required: true},
	email: 			{  type: Number, min: 0, required: true},
	fromDate: 		{  type: Date, default: Date.now, required:true},
	toDate: 		{  type: Date, default: Date.now, required:true},

});


var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;