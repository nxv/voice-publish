(function(){
  define(['app/main'], function(app){
    return app.controller('loginController', function($scope, $http, $location){
      return $scope.message = "Message from loginController";
    });
  });
}).call(this);
