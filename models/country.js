//country.js

// =========================  NOTES ================================
/* 		Schema Types
		String
		Number
		Date
		Buffer
		Boolean
		Mixed
		ObjectId
		Array

*/

// modules =========================================================
var mongoose 		= require('mongoose');
var Schema			= mongoose.Schema;

var countrySchema = new Schema({

	name: 		{ type: String, required: true},
	size: 		{ type: Number, min: 0, required: true},
	population: { type: Number, min: 0, required: true},
	language:   { type: String, required: true},
	donkey: 	{ type: String, required: false}

},
 {
    versionKey: false // You should be aware of the outcome after set to false
});


var Country = mongoose.model('Country', countrySchema);

module.exports = Country;