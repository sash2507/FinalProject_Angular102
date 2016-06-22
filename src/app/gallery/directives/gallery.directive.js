(function() {

'use strict';

angular

.module('template')

	.directive('galleryDirective', function() {
		return {
		templateUrl: 'app/gallery/partials/gallery-template.html',
		controller: 'GalleryController as gdCtrl',
		scope: false
		}
	})
	.directive('linkDirective', function() {
		return {
			link: function(scope, elem) {
				elem.css("color", "blue");
			}
		}
	})


})();