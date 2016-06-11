'use strict';


module.exports = function(app) {
	var path = require('path');
	var hackerNewsController = require('../controllers/hacker-news.controller');

	app.route('/api/getSuperheros').get(superheroController.getSuperheros);
	app.route('/api/addSuperhero').put(fileProcessor('file'), superheroController.addSuperhero);
};