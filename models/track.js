//track.js
// =========================  NOTES =========================================



// modules ==================================================================
var mongoose 		= require('mongoose');
var Schema			= mongoose.Schema;

var trackSchema = new Schema({

	sport: 		{ type: String, required: true},
	trackName:	{ type: String, required: true},
	trackType:	{ type: String, required: true},
	region: 	{ type: String, required: true},
	trackRating:{ type: Number, min:0, max:10, required: false},
	km: 		{ type: Number, min: 0, required: false},
	countryId: 	{ type: Schema.ObjectId, ref: 'Country', required: false}


},
 {
    versionKey: false 
    // Just set this to false so we wouldn't see it in the JSON files. Probably very smart to have it. 
    // Will probably enable it when I've figured out why it was stupid to turn it off. 
});

var Track = mongoose.model('Track', trackSchema);

module.exports = Track;