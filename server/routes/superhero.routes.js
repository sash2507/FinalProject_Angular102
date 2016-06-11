'use strict';


module.exports = function(app) {
	var path = require('path');
	var fileProcessor = require(path.resolve('./server/utility/file-processor.utility'));
	var superheroController = require('../controllers/superhero.controller');

	app.route('/api/getSuperheros').get(superheroController.getSuperheros);
	app.route('/api/addSuperhero').put(fileProcessor('file'), superheroController.addSuperhero);
	app.route('/api/updateVote/').post(superheroController.updateVote);
};