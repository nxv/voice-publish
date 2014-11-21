(function(){
  this.App = {
    name: 'voice-publish',
    title: 'VOICE Publish System',
    parse: {
      appId: 'IST5ENg8qZjjYQ5k1OuDifF51kyWUY8BJAwuODs4',
      jsKey: 'auk2w2yBpOzt0T6ASwu8cNxz8YoHkuBvrYpLj26r'
    }
  };
  require.config({
    baseUrl: 'lib',
    paths: {
      'js': '../js',
      'app': '../js/app',
      'jquery': 'jquery/jquery',
      'ckeditor-core': 'ckeditor/ckeditor',
      'ckeditor-jquery': 'ckeditor/adapters/jquery',
      'angular': 'angular/angular',
      'angularAMD': 'angularAMD/angularAMD',
      'angular-mocks': 'angular-mocks/angular-mocks',
      'angular-route': 'angular-route/angular-route',
      'bootstrap': 'bootstrap/bootstrap',
      'parse': 'parse/parse.min'
    },
    shim: {
      'ckeditor-jquery': {
        deps: ['jquery', 'ckeditor-core']
      },
      'angular-route': ['angular'],
      'angularAMD': ['angular']
    },
    deps: ['app/main']
  });
}).call(this);
