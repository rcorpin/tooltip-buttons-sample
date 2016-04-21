const angular = require('angular');

class TooltipButtonDirective {
  constructor() {
    this.template = require('./tooltip-button.template.html');
    this.restrict = 'E';
    this.replace = true;
    this.scope = {
      buttonText: '=?',
      tooltip: '=',
      onOpen: '&?'
    };
  }

  link(scope, element, attrs) {
    angular.extend(scope.tooltip, {
      open() {
        this.isOpen = true;

        /* call the onOpen method on HomeCtrl where both buttons are being managed,
         * so that it can trigger the other button to close when this one opens
         */
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
}

module.exports = TooltipButtonDirective;