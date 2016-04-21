/* escapeKeypress can be injected on any element, and the function associated with the 'escape-keypress' attribute
 * will be called when the escape key is pressed.
 */


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
