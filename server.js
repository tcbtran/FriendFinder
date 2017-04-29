// Load our node dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "/public" directory in the app folder
app.use(express.static(__dirname + "/public"));

// Using BodyParser to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Initiate the listener
app.listen(PORT, function() {
	console.log("App listening on PORT:%s", PORT);
});