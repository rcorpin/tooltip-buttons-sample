'use strict';

module.exports = function($scope) {
  // optional: only if you want to customize the button and tooltip text, and if you want to initialize the tooltip state
  $scope.button1 = {
    text: 'Button 1',
    tooltip: {
      text: 'Button 1 tooltip!',
      isOpen: true
    }
  };

// button 2 is not defined here. It only uses the defaults for tooltip-button
};