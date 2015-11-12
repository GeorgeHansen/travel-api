//country.js

// =========================  NOTES =========================================
/* 		
	The [] denotes an array. Essentially a list which means you can	enter
	multiple values in that field.

	The tracks contains a reference to the id of another collection.
	In this case the type is an ObjectId and it refers to the collection
	"Track"

	Embedding an array in a collection denotes a one to few relationship
	Meaning you'll probably not have very many entries in here. 
	most countries don't have several thousand languages for example. 

	Storing a reference denotes a one to many relationship. This is similiar
	to the RDBMs we are used to

	There is also a one to squillion relationship (I didn't make that up)
	Not sure how to do that but we don't need it :p. 

*/

// modules ==================================================================
var mongoose 		= require('mongoose');
var Schema			= mongoose.Schema;

var countrySchema = new Schema({

	name: 			{  type: String, required: true},
	size: 			{  type: Number, min: 0, required: true},
	population: 	{  type: Number, min: 0, required: true},
	description: 	{  type: String, required: false},
	languages:  	[{ type: String, required: true}], 
	tracks:  		[{ type: Schema.ObjectId, ref: 'Track', required: false}],
	imageLocation: 	{ type: String, required:false}

},
 {
    versionKey: false 
    // Just set this to false so we wouldn't see it in the JSON files. Probably very smart to have it. 
    // Will probably enable it when I've figured out why it was stupid to turn it off. 
});


var Country = mongoose.model('Country', countrySchema);

module.exports = Country;