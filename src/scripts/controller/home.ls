define ['app/main'], (app) ->
  app.controller 'homeController', ($scope, $http, $location) ->
    unless Parse.User.current()
      $location.path '/login'
    $scope.message = "Message from homeController"
