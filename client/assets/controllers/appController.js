app.controller('appController', function ($scope, $timeout, $mdMedia, $mdSidenav) {
    $scope.openSideNavPanel = function() {
        $mdSidenav('left').toggle();
    };
    $scope.closeSideNavPanel = function() {
        $mdSidenav('left').close();
    };
  });