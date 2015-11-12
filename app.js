var express = require('express');
var app = express();
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/aviation-mgm')
var Passengers = require("./models/passenger");
var Flights = require("./models/flight");
var Airports = require("./models/airport");
var Terminals = require("./models/terminal");

// Passengers.find({},function(err,passengers){
//   // passengers = ARRAY
//   console.log(passengers);
// })




app.listen(port);
console.log("server connected");