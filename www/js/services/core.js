'use strict';

/* App Module */
var coreApp = angular.module('coreApp', [
  'ngRoute',
  'loginControllerApp'
]);

coreApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        }).
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'credentialManagerController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);
