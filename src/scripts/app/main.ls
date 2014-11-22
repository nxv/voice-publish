define ['jquery', 'ckeditor-jquery', 'angular-route', 'webfont', 'angularAMD', 'app/parse'],
( _jquery_, _ckeditor_, _angularRoute_, _webfont_, angularAMD, parse ) ->

  WebFont.load({
    google: {
      families: ['Open Sans:300,400,700']
    }
  });

  app = angular.module('webapp', ['ngRoute'])

  app.factory 'Page', ->
    bodyClass = 'home'
    setBodyClass = (postfix) ->
      bodyClass = "app-#{postfix}"
    setBodyClass bodyClass
    { bodyClass: -> bodyClass
    , setBodyClass }

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
      .when '/signin', angularAMD.route do
        templateUrl   : 'pages/signin.html'
        controller    : 'signinController'
        controllerUrl : 'js/controller/signin.js'

  return angularAMD.bootstrap(app)
