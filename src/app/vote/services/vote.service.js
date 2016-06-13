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

/* Upload service being injected is from the ng-file-upload library */
.factory('SuperheroAddResource', function() {
	return {
		get: function(toList) {
			return Upload.upload({
				url: '/api/addSuperhero',
				method:'PUT',
				data: {content: angular.toJson(toAdd)},
				file: toList.file
			});
		}
	};
})

// Update votes resource object/request

// .factory('VoteUpdateResource', function() {
// 	return {
// 		update: function(toUpdate) {
// 			return Upload.upload({
// 				url: '/api/updateSuperheros/',
// 				method:'POST',
// 				data: {content: angular.toJson(toUpdate)},
// 				file: toUpdate.file
// 			});
// 		}
// 	};
// })

// // Update votes data service

// .service('UpdateDataService', function() {
//  	self.updateVotes = function(vote, onCompletion) {
//     VoteUpdateResource.update(vote, function(isValid, response){
//         if(isValid) {
//             self.vote = response.data;
//             // console.log(response.data)    
//             onCompletion(true, self.vote);
//             };
//         });
//     };
// })

})();