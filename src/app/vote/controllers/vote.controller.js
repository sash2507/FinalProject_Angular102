(function() {

'use strict';

angular.module('MyApp.Vote')

.controller('VoteController', function(ALLPHOTOS, ListDataService) {
    var self = this;
    self.Photos = ALLPHOTOS;

    self.listPhotoList = ListDataService.allPhotosList(function(isValid, response) {
        if (isValid) {
            self.photos = response;
        }
    })

    self.voteUp = function(photo) {
        photo.upvote = photo.upvote + 1;
    }

    self.voteDown = function(photo) {
        photo.downvote = photo.downvote + 1;
    }

    // self.saveVotes = function(vote) {
    //     UpdateDataService.updateVotes(vote, function(isValid, response) {
    //         self.vote = response;
    //         });
    // };
    
    });

})();