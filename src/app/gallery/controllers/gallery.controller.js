(function() {
'use strict';

angular.module('MyApp.Gallery')

.controller('GalleryController', function(ALLPHOTOS, Gallery, GalleryService, $interval) {
    var self = this;
    self.Photos = ALLPHOTOS;
    console.log("Gallery Controller initialized"); 

        self.imageCount = 0;

    self.currentImage = Gallery[0];

    console.log(self.currentImage);

    self.countImage = function() {
        self.imageCount = GalleryService.galleryAddOne(self.imageCount);
        self.currentImage = Gallery[self.imageCount];
    }
    $interval(self.countImage, 3000);
})

})();
