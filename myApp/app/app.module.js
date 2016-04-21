'use strict';

const angular = require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('angular-click-outside');

require('./components/home');

require('./shared/tooltip-button');



angular
  .module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'tw.directives.clickOutside',

    'myApp.home',

    'tooltipButton'
  ])
  .config(['$routeProvider', $routeProvider => {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/components/home/home.view.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);
