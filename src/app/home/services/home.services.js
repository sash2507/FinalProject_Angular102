'use strict';

angular.module('template')

// Superhero resources
.factory('SuperheroListResource', function($resource) {
	return $resource('/api/getSuperheros');
})
