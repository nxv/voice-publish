(function(){
  define(['app/main'], function(app){
    return app.controller('dashboardController', function($scope){
      return $scope.message = "Message from dashboardController";
    });
  });
}).call(this);
