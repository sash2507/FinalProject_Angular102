(function() {

'use strict';

angular.module('MyApp.Vote')

// Superhero resources
.factory('SuperheroListResource', function($resource) {
	return $resource('/api/getSuperheros');
})

/* Upload service being injected is from the ng-file-upload library */
.factory('SuperheroAddResource', function(Upload) {
	return {
		add: function(toList) {
			return Upload.upload({
				url: '/api/addSuperhero',
				method:'PUT',
				data: {content: angular.toJson(toList)},
				file: toList.file
			});
		}
	};
})

.factory('VoteUpdateResource', function(Upload) {
    return {
        update: function(toUpdate) {
            return Upload.upload({
                url: '/api/updateVote/',
                method:'POST',
                data: {content: angular.toJson(toUpdate)},
                file: toUpdate.file
            });
        }
    };
})

})();