var _      = require('lodash'),
    fs     = require('fs'),
    path   = require('path'),
    appCfg = require('./config'),
    pkgCfg = require('./package.json'),

    escapeChar        = process.platform.match(/^win/) ? '^' : '\\',
    cwd               = process.cwd().replace(/( |\(|\))/g, escapeChar + '$1'),
    sourceDirectory   = path.resolve(cwd, 'src'),
    buildDirectory    = path.resolve(cwd, 'build'),
    releaseDirectory  = path.resolve(cwd, 'release'),
    bowerDirectory    = path.resolve(cwd, 'bower_components');

var ENV = {
  DEVELOPMENT : 'development',
  PRODUCTION  : 'production',
};

fs.writeFileSync('.bowerrc',
  JSON.stringify({directory: path.relative(cwd,bowerDirectory)}));

configureGrunt = function (grunt) {
  var bowerModules = {};

  require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

  var generateJadeData = function(env) {
    var data = {pkg: pkgCfg, app: appCfg, env: ENV.DEVELOPMENT};
    switch(env) {
      case ENV.PRODUCTION:
        data.env = ENV.PRODUCTION;
        break;
    }
    return data;
  };

  var generateInjection = function(code) {
    return 'Start JS Injection */\n' + code + '\n/* End JS Injection';
  }

  var generateAppInjection = function() {
    return generateInjection('this.App = ' + JSON.stringify(appCfg, null, '  ') + ';');
  }

  var generatePathsInjection = function() {
    var exceptions = ['requirejs'],
        libs = fs.readdirSync(buildDirectory + '/lib'),
        lines = libs.filter(function(lib) {
          return !grunt.file.isMatch(exceptions, lib);
        }).map(function(lib) {
          return ', \'' + lib + '\': \'' + lib + '/' + lib + '\'';
        });
    return generateInjection(lines.join('\n'));
  };

  var cfg = {
    paths: {
      src:     sourceDirectory,
      build:   buildDirectory,
      release: releaseDirectory,
      bower:   bowerDirectory
    },

    pkg: pkgCfg,

    app: appCfg,

    clean: {
      build:   ['<%= paths.build   %>'],
      release: ['<%= paths.release %>'],
      bower:   ['<%= paths.bower   %>']
    },

    livescript: {
      compile: {
        options: {
          process: function (content, srcpath, destpath) {
            var patterns = ['**/js/app.js'],
                injection = {
                  AppObject: generateAppInjection(),
                  PathDef: generatePathsInjection()
                };

            _.assign(injection, cfg);

            if (grunt.file.isMatch(patterns, destpath))
              return grunt.template.process(content, {data: injection});
            return content;
          }
        },
        files: [
          {expand: true, cwd: '<%= paths.src %>/scripts', src: ['**/*.ls'], dest: '<%= paths.build %>/js', ext: '.js'}
        ]
      }
    },

    jade: {
      build: {
        options: {
          data: generateJadeData(ENV.DEVELOPMENT),
          pretty: true
        },
        files: [
          {expand: true, cwd: '<%= paths.src %>/views', src: ['**/*.jade'], dest: '<%= paths.build %>', ext: '.html'}
        ]
      }
    },

    sass: {
      build: {
        options: {
          outputStyle: 'none',
          sourceMap: true
        },
        files: [
          {dest: '<%= paths.build %>/css/style.css', src: '<%= paths.src %>/sass/screen.scss'}
        ]
      }
    },

    copy: {
      build: {
        files: [
          {expand: true, src: ['lib/**'], dest: '<%= paths.build %>'}
        ]
      },
      release: {
        files: [
          {expand: true, cwd: '<%= paths.build %>', src: ['**'], dest: '<%= paths.release %>'}
        ]
      }
    },

    bower: {
      install: {
        options: {
          cleanup: true,
          targetDir: '<%= paths.build %>/lib',
          // Maintain the original package structure since static resource reference may fail with managed layout
          layout: function(type, pkg, source) {
            bowerModules[pkg] == null && (bowerModules[pkg] = []);
            var srcpath = path.resolve(cwd, source),
                destpath = path.relative(bowerDirectory, srcpath);
            bowerModules[pkg].push(destpath);
            return path.dirname(destpath);
          }
        }
      }
    }

    // requirejs: {
    //   compile: {
    //     options: {
    //       appDir:   '<%= paths.build %>',
    //       baseUrl:  '<%= paths.src %>/lib',
    //       dir:      '<%= paths.release %>',
    //       optimize: 'none',
    //       mainConfigFile: '<%= paths.build %>/js/app.js'
    //     }
    //   }
    // }
  };

  grunt.initConfig(cfg);

  grunt.registerTask('build', ['clean:build', 'bower', 'copy:build', 'livescript', 'jade:build', 'sass:build']);
  grunt.registerTask('release', ['clean', 'build', 'copy:release']);
  grunt.registerTask('default', ['build']);
};

module.exports = configureGrunt;