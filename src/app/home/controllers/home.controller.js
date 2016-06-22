(function() {
'use strict';

angular.module('MyApp.Home')

.controller('HomeController', function(ALLPHOTOS) {
    var self = this;
    self.name = "George";
    self.Photos = ALLPHOTOS;
    console.log("Home Controller initialized"); 
})
})();