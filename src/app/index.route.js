(function() {
  'use strict';

  angular
    .module('template')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, ALLPHOTOS) {
    $stateProvider

      .state(ALLPHOTOS.kHomeState, {
        url: '/',
        templateUrl: 'app/home/partials/home.main.html',
        controller: 'MainController as ctrl',
      })

      .state(ALLPHOTOS.kUploadState, {
        url: '/upload',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as ctrl',
      })

    .state(ALLPHOTOS.kVoteState, {
       url: '/vote',
       templateUrl: 'app/vote/partials/vote.main.html',
       controller: 'VoteController as ctrl'
     })
    
    .state(ALLPHOTOS.kGalleryState, {
      url: '/ gallery',
      templateUrl: 'app/gallery/partials/gallery.main.html',
      controller: 'GalleryController as ctrl'
    })


    $urlRouterProvider.otherwise('/');
  }

})();
