'use strict';

angular.module('template')


// Superhero resources
.factory('PhotoListResource', function($resource) {
	return $resource('/api/getPhotos');
})

/* Upload service being injected is from the ng-file-upload library */
.factory('PhotoAddResource', function(Upload) {
	return {
		add: function(toAdd) {
			return Upload.upload({
				url: '/api/addPhoto',
				method:'PUT',
				data: {content: angular.toJson(toAdd)},
				file: toAdd.file
			});
		}
	};
});
