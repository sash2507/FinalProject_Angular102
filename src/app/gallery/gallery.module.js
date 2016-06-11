angular.module('MyApp.Gallery', ['ngResource'])
    .config(function ( $httpProvider) {
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
})