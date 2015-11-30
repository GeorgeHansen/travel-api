//db configuration to go here. Not sure what is necessary other than url


//MONGO DB OBJECT ID

/*
	OBJECTID
	//https://docs.mongodb.org/manual/reference/object-id/

	A BSON ObjectID is a 12-byte value consisting of a 4-byte timestamp (seconds since epoch),
	a 3-byte machine id, a 2-byte process id, and a 3-byte counter. 
	Note that the timestamp and counter fields must be stored big endian unlike the rest of BSON.


	MONGODB Schema Design
	http://blog.mongodb.org/post/87200945828/6-rules-of-thumb-for-mongodb-schema-design-part-1

	Very good read on designing schema's in mongodb

	https://docs.mongodb.org/manual/reference/sql-comparison/

	TO Read
	https://www.kidscodecs.com/database-design/
	http://theholmesoffice.com/mongoose-connection-best-practice/ 

*/


module.exports = {

	url : 'mongodb://travelDB:rTAZUb3JHNYFUYKGgXks5n1r7jX_JefpENj5fetWqN8-@ds042898.mongolab.com:42898/travelDB'

	//other two should work as well. No idea why they arent. 
	//url : process.env.DB_URL 
	//url = 'mongodb://stark-fjord1:travel-kea1@ds042898.mongolab.com:42898/travelDB';
	
}



