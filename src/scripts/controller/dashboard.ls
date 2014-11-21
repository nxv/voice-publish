define ['app/main'], (app) ->
  app.controller 'dashboardController', ($scope, Page) ->
    Page.setBodyClass 'dashboard'
    $scope.message = "Message from dashboardController" 
