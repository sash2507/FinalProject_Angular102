(function() {

'use strict';

angular
	.module('template')

	.directive('hdDirective', function() {
		return {
			templateUrl: 'app/main/hddirective.html'
		}
	})

	.directive('ftDirective', function() {
		return {
			templateUrl: 'app/main/ftdirective.html'
		}
	})

	.directive('bdyDirective', function() {
		return {
			templateUrl: 'app/main/bodydirective.html'
		}
	})


})();