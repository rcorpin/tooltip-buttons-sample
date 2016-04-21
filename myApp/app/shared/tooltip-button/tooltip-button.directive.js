const angular = require('angular');

class TooltipButtonDirective {
  constructor() {
    this.template = require('./tooltip-button.template.html');
    this.restrict = 'E';
    this.replace = true;
    this.scope = {
      buttonText: '=?',
      tooltip: '=?'
    };
  }

  link(scope, element, attrs) {
    if (!scope.tooltip) {
      scope.tooltip = {};
    }

    angular.extend(scope.tooltip, {
      open() {
        this.isOpen = true;
      },
      close() {
        this.isOpen = false;
      }
    });

  }
}

module.exports = TooltipButtonDirective;