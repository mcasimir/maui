angular.module('mobile-angular-ui.directives.navbars', [])

.directive('navbarAbsoluteTop', function() {
  return {
    replace: false,
    restrict: "C",
    link: function(scope, elem, attrs) {
      elem.parent().addClass('has-navbar-top');
      elem.bind("$destroy", function() {
            elem.parent().removeClass('has-navbar-top');
        });
    }
  };
})

.directive('navbarAbsoluteBottom', function() {
  return {
    replace: false,
    restrict: "C",
    link: function(scope, elem, attrs) {
      elem.parent().addClass('has-navbar-bottom');
      elem.bind("$destroy", function() {
            elem.parent().removeClass('has-navbar-bottom');
        });
    }
  };
});