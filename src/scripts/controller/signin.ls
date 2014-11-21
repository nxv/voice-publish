define ['app/main'], (app) ->
  app.controller 'signinController', ($scope, $http, $location, $rootScope) ->
    $rootScope.bodyLayout = 'app-signin'
    $scope.message = "Message from signinController"
