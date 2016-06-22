(function() {

'use strict';

angular

.module('MyApp.Gallery')

.factory('rssFeedFactory', function ($resource) {
   return $resource('http://rss2json.com/api.json', null,
     {
       getFeeds: {
         method: 'GET'
       }
     });  
 })

.service('FeedListService', function (rssFeedFactory) {
   this.listFeeds = function(onCompletion) {
     var feedArray = [
       {name: 'Elle', url: 'http://www.elle.com/rss/fashion.xml'},
       {name: 'Womens Wear Daily', url: 'http://wwd.com/custom-feed/fashion'},
       {name: 'E! News', url: 'http://syndication.eonline.com/syndication/feeds/rssfeeds/fashion.xml'},
       {name: 'GQ', url: 'https://www.gq.com/rss'},
       {name: 'Self', url: 'http://www.self.com/feed/fashion-news'}
     ];

    var feeds = [];
    for (var i = 0; i < feedArray.length; i++) {
       rssFeedFactory.getFeeds({
           rss_url: feedArray[i].url
         },
        function (response) {
             console.log(response);
             var feedResponse = response.feed;
             var itemsResponse = response.items;
             feeds.push(response);

            if (feeds.length === feedArray.length) {
               onCompletion(feeds)
             }
           }
         );
     };
   };
 })

 .service('GalleryService', function(Gallery){
 var self = this;  self.galleryAddOne = function(count) {
   count = count + 1;
   self.image = angular.copy(Gallery);
   self.end = self.image.length;
   if (count === self.end) {
     count = 0;
   }
   return count;
 }
})

.controller('rssFeedCtrl', function (FeedListService) {
   var self = this;
   console.log("RSSFeeds Controller initialized");
   FeedListService.listFeeds(function(allResponses) {
       self.responses = allResponses;
    });
 })
})();

