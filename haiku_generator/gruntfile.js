'use strict';

module.exports = function(grunt) {
  //Unified watch objects.
  var watchFiles = {
    serverViews: ['public/**'],
    serverJS: ['app.js, routes/**'],
    mochaTests: ['tests/**/*.js']
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {

      serverViews: {
        files: watchFiles.serverViews,
        options: {
          livereload: true
        }
      },

      serverJS: {
        files: watchFiles.serverJS,
        tasks: ['jsHint'],
        options: {
          livereload: true
        }
      },
    },

    jshint: {
      all: {
        src: watchFiles.serverJS,
        options: {
          jshintrc: true
        }
      }
    },

    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          nodeArgs: ['--debug'],
          ext: 'js, html',
          watch: watchFiles.serverViews.concat(watchFiles.serverJS)
        }
      }
    },
    'node-inspector': {
      custom: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost',
          'debug-port': 5858,
          'save-live-edit': true,
          'no-payload': true,
          'stck-trace-limit': 50,
          'hidden': []
        }
      }
    }
  });

  // Load npm tasks
  require('load-grunt-tasks')(grunt);

  // Making grunt default to force in order not to break the project.
	grunt.option('force', true);

  // Default task(s).
	grunt.registerTask('default', ['lint', 'concurrent:default']);

	// Debug task.
	grunt.registerTask('debug', ['lint', 'concurrent:debug']);

  // Build task(s).
grunt.registerTask('build', ['lint', 'loadConfig', 'ngmin', 'uglify']);

// Test task.
grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);

};
