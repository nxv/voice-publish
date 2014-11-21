(function(){
  define(['jquery', 'ckeditor-jquery', 'angular-route', 'angularAMD', 'app/parse'], function(_jquery_, _ckeditor_, _angularRoute_, angularAMD, parse){
    var app;
    app = angular.module('webapp', ['ngRoute']);
    app.config(function($routeProvider){
      return $routeProvider.when('/', angularAMD.route({
        templateUrl: 'pages/home.html',
        controller: 'homeController',
        controllerUrl: 'js/controller/home.js'
      })).when('/dashboard', angularAMD.route({
        templateUrl: 'pages/dashboard.html',
        controller: 'dashboardController',
        controllerUrl: 'js/controller/dashboard.js'
      })).when('/login', angularAMD.route({
        templateUrl: 'pages/login.html',
        controller: 'loginController',
        controllerUrl: 'js/controller/login.js'
      }));
    });
    return angularAMD.bootstrap(app);
  });
}).call(this);
