(function(){
  define(['app/main'], function(app){
    return app.controller('homeController', function($scope, $http, $location){
      if (!Parse.User.current()) {
        $location.path('/login');
      }
      return $scope.message = "Message from homeController";
    });
  });
}).call(this);
