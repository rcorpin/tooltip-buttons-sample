'use strict';

const angular = require('angular');

module.exports = angular
  .module('escapeKeypress', [])
  .directive('escapeKeypress', () => (scope, element, attrs) => {
    element.bind('keydown keypress', event => {
      if (event.which === 27) {
        scope.$apply(() => {
          scope.$eval(attrs.escapeKeypress);
        });

        event.preventDefault();
        event.stopPropagation();
      }
    });
  });
