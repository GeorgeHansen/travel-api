//server.js

//Will want to have a look at this tutorial later. 
//https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application

// modules =========================================================
var express 		= require('express');
var app 			= express();
var bodyParser 		= require('body-parser'); //can't remember what this was for either.
var methodOverride 	= require('method-override'); //whats this for?



//config files
var database = require('./config/database');

//app port
var port = process.env.PORT || 3000;


//