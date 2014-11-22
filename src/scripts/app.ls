# Auto generated global App object
/* <%= AppObject %> */

require.config do
  baseUrl: 'lib'
  paths:
    'js': '../js'
    'app': '../js/app'
    'ckeditor':'ckeditor/ckeditor'
    'ckeditor-jquery':'ckeditor/adapters/jquery'
    # Auto generated paths
    /* <%= PathDef %> */
  shim:
    'ckeditor-jquery':
      deps: ['jquery', 'ckeditor']
    'angular-route': ['angular']
    'angularAMD': ['angular']
    'parse': ['underscore']
  deps: ['app/main']
