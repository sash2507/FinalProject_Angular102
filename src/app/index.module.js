(function() {
  'use strict';

  angular
    .module('template', [
    	'ngAnimate', 
    	'ngResource', 
    	'ui.router', 
    	'ui.bootstrap', 
    	'ngFileUpload',
        'MyApp.Home',
    	'MyApp.Vote',
        'MyApp.Gallery'
    	]);

})();
