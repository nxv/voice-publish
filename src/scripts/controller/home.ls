define ['app/main'], (app) ->
  app.controller 'homeController', ($scope, $http, $location, Page) ->
    Page.setBodyClass 'home'
    unless Parse.User.current()
      $location.path '/signin'
    $scope.message = "Message from homeController"
