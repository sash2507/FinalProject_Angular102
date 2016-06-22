'use strict';

angular.module('template')

.controller('MainController', function() { 
  var self = this;
  self.displayTodos = true;
  self.toggleView = function(showTodos) { 
    self.displayTodos = showTodos;
  };
})

.controller('PhotoController', function(PhotoListResource, PhotoAddResource) { 
  var self = this;
  (function getList() {
    PhotoListResource.get().$promise
    .then(function(response) {
      self.photos = response.data;
      console.log(response);
    });

  })();

 
  self.addPhoto = function(photo) { 
    PhotoAddResource.add(photo)
    .then(function(response) {
      self.photo.profileImage = response.data.profileImage;
      self.photos.push(photo);
      self.photo = {};
    });
  };
})
