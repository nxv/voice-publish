define ['jquery', 'ckeditor-jquery', 'angular-route', 'angularAMD', 'app/parse'],
( _jquery_, _ckeditor_, _angularRoute_, angularAMD, parse ) ->

  app = angular.module('webapp', ['ngRoute'])

  app.config ($routeProvider) ->
    $routeProvider
      .when '/', angularAMD.route do
        templateUrl   : 'pages/home.html'
        controller    : 'homeController'
        controllerUrl : 'js/controller/home.js'
      .when '/dashboard', angularAMD.route do
        templateUrl   : 'pages/dashboard.html'
        controller    : 'dashboardController'
        controllerUrl : 'js/controller/dashboard.js'
      .when '/login', angularAMD.route do
        templateUrl   : 'pages/login.html'
        controller    : 'loginController'
        controllerUrl : 'js/controller/login.js'

  return angularAMD.bootstrap(app)
