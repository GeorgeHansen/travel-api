//server.js

//Will want to have a look at this tutorial later. 
//https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application

//TODO enable CORS, cross site scripting to allow another domain to contact our api. 

// modules =========================================================
var express 		= require('express');
var app 			= express();
var bodyParser      = require('body-parser');
var cors           = require('cors');
//Routes   =========================================================
var countries       = require('./routes/countries.js');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors()); //enables cors. This means that users from other domains can access the api. 

//for future add '/api/' before route
app.use(countries);


//app port
var port = process.env.PORT || 3000;



app.listen(port);



//