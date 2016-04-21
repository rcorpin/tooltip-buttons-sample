'use strict';

const angular = require('angular');
require('../escape-keypress');

module.exports = angular
  .module('tooltipButton', ['escapeKeypress'])
  .directive('tooltipButton', require('./tooltip-button.directive.js'));
