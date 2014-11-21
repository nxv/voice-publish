/* Start JS Injection */
this.App = {
  "name": "voice-publish",
  "title": "VOICE Publish System",
  "parse": {
    "appId": "IST5ENg8qZjjYQ5k1OuDifF51kyWUY8BJAwuODs4",
    "jsKey": "auk2w2yBpOzt0T6ASwu8cNxz8YoHkuBvrYpLj26r"
  }
};
/* End JS Injection */
(function(){
  require.config({
    baseUrl: 'lib',
    paths: {
      'js': '../js',
      'app': '../js/app',
      'ckeditor-jquery': 'ckeditor/adapters/jquery'
      /* Start JS Injection */
, 'angular': 'angular/angular'
, 'angular-mocks': 'angular-mocks/angular-mocks'
, 'angular-route': 'angular-route/angular-route'
, 'angularAMD': 'angularAMD/angularAMD'
, 'bootstrap': 'bootstrap/bootstrap'
, 'ckeditor': 'ckeditor/ckeditor'
, 'fontawesome': 'fontawesome/fontawesome'
, 'jquery': 'jquery/jquery'
, 'parse': 'parse/parse'
, 'underscore': 'underscore/underscore'
/* End JS Injection */
    },
    shim: {
      'ckeditor-jquery': {
        deps: ['jquery', 'ckeditor']
      },
      'angular-route': ['angular'],
      'angularAMD': ['angular'],
      'parse': ['underscore']
    },
    deps: ['app/main']
  });
}).call(this);
