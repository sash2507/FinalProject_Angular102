'use strict';

angular.module('template')

// Superhero resources
.factory('PhotoListResource', function($resource) {
	return $resource('/api/getPhotos');
})
