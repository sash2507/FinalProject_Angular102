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

	self.upVotes = function(photo, onCompletion) {
		ListRequestService.updatePhoto(photo, function (isValid, response) {
			if(isValid) {
				self.photosUpVote = response.data;
				onCompletion(true, self.photosVote);
			} else {

			}
		})
	}
})

.service('ListRequestService', function(PhotoListResource, VoteUpdateResource) {
	var self = this;

	self.getPhotoList = function(onCompletion) {
		PhotoListResource.get().$promise
		.then(function(response) {
			onCompletion(true, response);
		}, function(error) {
			onCompletion(false, error);
		})
	}

	self.updatePhoto = function(photo, onCompletion) {
		VoteUpdateResource.update(photo)
		.then(function(response) {
			onCompletion(true, response);
		}, function(error) {
			onCompletion(false, error);
		}) 
	}
})

})();