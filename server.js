// Load our node dependencies
var express = require('express');
var bodyParser = require('body-parser');
// you aren't actually using the path module in this file so there's no need to require it
// var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "/public" directory in the app folder
app.use(express.static(__dirname + "/public"));

// Using BodyParser to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Initiate the listener
app.listen(PORT, function() {
	console.log("App listening on PORT:%s", PORT);
});