(function() {

'use strict';

angular.module('MyApp.Vote')

.service('ListDataService', function(ListRequestService) {
	var self = this;

	self.allPhotosList = function(onCompletion) {
		ListRequestService.getPhotoList(function(isValid, response) {
			if (isValid) {
				self.photos = response.data;
				onCompletion(true, self.photos);
			} else {
				
			}
		})
	}
})

.service('ListRequestService', function(SuperheroListResource) {
	var self = this;

	self.getPhotoList = function(onCompletion) {
		SuperheroListResource.get().$promise
		.then(function(response) {
			onCompletion(true, response);
		}, function(error) {
			onCompletion(false, error);
		})
	}
})

})();