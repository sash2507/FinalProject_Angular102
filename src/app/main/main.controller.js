'use strict';

angular.module('template')

.controller('MainController', function() { 
  var self = this;
  self.displayTodos = true;
  self.toggleView = function(showTodos) { 
    self.displayTodos = showTodos;
  };
})

.controller('SuperheroController', function(SuperheroListResource, SuperheroAddResource) { 
  var self = this;
  (function getList() {
    SuperheroListResource.get().$promise
    .then(function(response) {
      self.superheros = response.data;
      console.log(response);
    });

  })();

 
  self.addSuperhero = function(superhero) { 
    SuperheroAddResource.add(superhero)
    .then(function(response) {
      self.superhero.profileImage = response.data.profileImage;
      self.superheros.push(superhero);
      self.superhero = {};
    });
  };
})
