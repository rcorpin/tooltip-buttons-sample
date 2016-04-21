'use strict';

module.exports = angular
  .module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', $routeProvider => {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/components/home/home.view.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }])

  .controller('HomeCtrl', require('./home.controller.js'));
