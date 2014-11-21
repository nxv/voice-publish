define ['app/main'], (app) ->
  app.controller 'loginController', ($scope, $http, $location) ->
    $scope.message = "Message from loginController"
