const angular = require('angular');

module.exports = () => ({
  restrict: 'E',
  templateUrl: 'app/shared/tooltip-button/tooltip-button.template.html',
  replace: true,
  scope: {
    buttonText: '=?',
    tooltip: '=',
    onOpen: '&?'
  },
  link(scope, element, attrs) {
    angular.extend(scope.tooltip, {
      open() {
        this.isOpen = true;
        scope.onOpen({
          id: this.id
        });
      },
      close() {
        this.isOpen = false;
      }
    });

    /* Default Attribute Values */

    if (!angular.isDefined(attrs.buttonText)) {
      scope.buttonText = 'Toggle tooltip';
    }

    if (!angular.isDefined(attrs.onOpen)) {
      scope.onOpen = angular.noop;
    }
  }
});