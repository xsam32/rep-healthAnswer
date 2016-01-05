// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('intro', {
    url: '/intro',
    controller: 'introCtrl',
    templateUrl: 'templates/intro.html'
  })

  .state('app.homeMenu', {
      url: '/homeMenu',
      views: {
        'menuContent': {
          templateUrl: 'templates/homeMenu.html'
        }
      }
    })
    .state('app.firstAid', {
      url: '/firstAid/:firstAidsId',
      views: {
        'menuContent': {
          templateUrl: 'templates/firstAid.html',
          controller: 'firstAidCtrl'
        }
      }
    })

  .state('app.firstAids', {
    url: '/firstAids',
    views: {
      'menuContent': {
        templateUrl: 'templates/firstAids.html',
        controller: 'firstAidsCtrl'
      }
    }
  })
  .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'mapCtrl'
        }
      }
    })
  .state('app.symptom', {
      url: '/symptom',
      views: {
        'menuContent': {
          templateUrl: 'templates/symptom.html',
          controller: 'symptomCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');
});
