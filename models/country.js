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

	name: 		{  type: String, required: true},
	size: 		{  type: Number, min: 0, required: true},
	population: {  type: Number, min: 0, required: true},
	description:{  type: String, required: false},
	languages:   [{ type: String, required: true}], //can enter multiple languages for this country
	tracks:  	[{ type: Schema.ObjectId, ref: 'Track', required: false}]

},
 {
    versionKey: false 
    // Just set this to false so we wouldn't see it in the JSON files. Probably very smart to have it. 
    // Will probably enable it when I've figured out why it was stupid to turn it off. 
});


var Country = mongoose.model('Country', countrySchema);

module.exports = Country;