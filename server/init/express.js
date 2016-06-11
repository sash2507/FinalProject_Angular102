'use strict';

var express = require('express');
var bodyParser = require('body-parser');

function initializeModels() {
	// Load in Database models
	require('../models/todo.model');
	require('../models/superhero.model');
}

function initializeStaticallyServedDirectories(app) {
	app.use(express.static('./dist'));
	app.use(express.static('./uploads'));
}

function initailizeRoutes(app) {
	// Load in Route handlers
	require('../routes/superhero.routes')(app);
	require('../routes/todo.routes')(app);
	require('../routes/yelp.routes')(app);
}

module.exports = function() {
	var app = express();
	app.use(bodyParser.json());

	initializeModels();
	initializeStaticallyServedDirectories(app);
	initailizeRoutes(app);

	return app;
};


