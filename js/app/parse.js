(function(){
  define(['parse', './class/article'], function(_parse_, Article){
    Parse.initialize(App.parse.appId, App.parse.jsKey);
    return {};
  });
}).call(this);
