//server.js

//Will want to have a look at this tutorial later. 
//https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application

// =========================  NOTES ================================

/*  MODULES

    1.)CORS - Cross-Origin Resource sharing

    Description: 
    enabling Cross-OriginResource sharing (CORS) is what allows certain resources (in our case the api) to be requested
    from another domain outside the domain from which the resource came from. In otherwords if you don't enable it.
    you can't access the api from anywhere other than the travel-project.azurewebsites.

    More info:
    https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

    2.) Express -

    Description: Web framework for Node. Use it primarily for routing and enabling middleware. Also functions
    as the server I think. 

    More info:
    http://expressjs.com
    
    3.) bodyParser

    Description: Middleware that allows us to access the body of the http request.

    More info:
    https://www.npmjs.com/package/body-parser

*/



// modules =========================================================
var express 		= require('express');
var app 			= express();
var bodyParser      = require('body-parser');
var cors            = require('cors');
//Route Requires====================================================
var countries       = require('./routes/countries.js');
var tracks          = require('./routes/tracks.js');


//Middleware Mounting ==============================================
app.use(express.static('public'));
app.use(cors()); 

//urlencoded only parses urlencoded bodies.(whats that?) Only accepts UTF-8. (will this ever be a problem?)
//Extended allows for rich objects and arays to be encoded into URL-encoded format. (That sounds usefull)
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); 


//Mounting routes ==================================================
    //Presumably counts as middleware because it mounts a router object?

app.use(countries);
app.use(tracks);


var port = process.env.PORT || 3000;
app.listen(port);

