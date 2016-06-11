'use strict';

var mkdirp = require('mkdirp');
var path = require('path');
var uuid = require('node-uuid');
var multer  = require('multer');

mkdirp(path.resolve('uploads/images'));

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads/images');
	}, 
	filename: function (req, file, cb) {
		var fileName = uuid.v4() + path.extname(file.originalname);
		req.body.fileLocation = 'images/' + fileName;
		cb(null, fileName);
	}
});

var upload = multer({storage: storage});


module.exports = function(fileProperty) {
	return upload.single(fileProperty);
};