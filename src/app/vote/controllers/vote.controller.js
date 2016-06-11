(function() {

'use strict';

angular.module('MyApp.Vote')

.controller('VoteController', function(ALLPHOTOS, ListDataService) {
    var self = this;
    self.Photos = ALLPHOTOS;

    self.listPhotoList = ListDataService.allPhotosList(function(isValid, response) {
        if (isValid) {
            self.superheros = response;
        }
    })

    // self.currentUpCount = 1;
    self.voteUp = function(superhero) {
        superhero.upvote = superhero.upvote + 1;
    }

    // self.currentDownCount = 1;
    self.voteDown = function(superhero) {
        superhero.downvote = superhero.downvote + 1;
    }

    });

})();