'use strict';

module.exports = function($scope) {
  $scope.button1 = {
    text: 'Button 1',
    tooltip: {
      id: 1,
      text: 'Button 1 tooltip!',
      isOpen: false
    }
  };

  $scope.button2 = {
    tooltip: {
      id: 2,
      isOpen: true
    }
  };

  $scope.onOpen = tooltipId => {
    switch (tooltipId) {
      case 1:
        $scope.button2.tooltip.isOpen = false;
        break;
      case 2:
        $scope.button1.tooltip.isOpen = false;
        break;
    }
  };
};