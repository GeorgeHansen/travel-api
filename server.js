//server.js

//Will want to have a look at this tutorial later. 
//https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application


// modules =========================================================
var express 		= require('express');
var app 			= express();
var bodyParser      = require('body-parser');
//Routes   =========================================================
var countries       = require('./routes/countries.js');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//for future add '/api/' before route
app.use(countries);


//app port
var port = process.env.PORT || 3000;



app.listen(port);



//