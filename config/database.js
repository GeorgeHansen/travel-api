//db configuration to go here. Not sure what is necessary other than url

module.exports = {
	url : process.env.DB_URL //|| link to local db
}




//should be able to connect with (process.env.DB_URL || 'linktolocaldb') 
//DB_URL is an environmental variable we set up on azure to refer to the travel db.


