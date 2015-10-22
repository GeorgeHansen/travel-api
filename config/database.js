//db configuration to go here. Not sure what is necessary other than url

module.exports = {

	url : 'mongodb://travelDB:rTAZUb3JHNYFUYKGgXks5n1r7jX_JefpENj5fetWqN8-@ds042898.mongolab.com:42898/travelDB'

	//other two should work as well. No idea why they arent. 
	//url : process.env.DB_URL 
	//url = 'mongodb://travel-kea:travel-kea1@ds042898.mongolab.com:42898/travelDB';
	
}

//DB_URL is an environmental variable we set up on azure to refer to the travel db.


