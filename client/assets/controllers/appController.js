app.controller('appController', function ($scope, $timeout, $mdMedia, $mdSidenav) {
    $scope.switch = true;
    $scope.toggleSideNav = function() {
        if($scope.switch === false){
            $scope.switch = true;
        }
        else {
            $scope.switch = false;
        }
        $mdSidenav('left').toggle();
    };
  });