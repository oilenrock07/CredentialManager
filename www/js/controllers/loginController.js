var loginControllerApp = angular.module('loginControllerApp', []);

loginControllerApp.controller('loginController', ['$scope', function ($scope) {

    //properties
    $scope.userName = '';
    $scope.password = '';


    //functions
    $scope.login = function (e) {
        if (!$('#form-login').valid())
            e.preventDefault();

        if (logIn($scope.userName, $scope.password)) {
            window.location = "partials/list.html";
        } else {            
            $('#loginError').showControl();
        }
    };
}]);