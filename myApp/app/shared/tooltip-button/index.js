/* tooltipButton directive creates a button with a tooltip on top which can be toggled on or off.
 * The text inside the button & tooltip can be customized, and the 'on-open' attribute allows for a method
 * to be called when a tooltip is opened.
 */

'use strict';

const angular = require('angular');

require('../escape-keypress');

module.exports = angular
  .module('tooltipButton', ['escapeKeypress'])
  .directive('tooltipButton', require('./tooltip-button.directive.js'));
