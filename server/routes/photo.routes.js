'use strict';

module.exports = function(app) {
	var path = require('path');
	var fileProcessor = require(path.resolve('./server/utility/file-processor.utility'));
	var photoController = require('../controllers/photo.controller');

	app.route('/api/getPhotos').get(photoController.getPhotos);
	app.route('/api/addPhoto').put(fileProcessor('file'), photoController.addPhoto);
	app.route('/api/updateVote/').post(photoController.updateVote);
};