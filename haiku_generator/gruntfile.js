module.exports = function(grunt) {
  var watchFiles = {
    serverJS: ['gruntfile.js', 'app.js', 'routes/*.js', 'tests/**/*.js']
  };
  grunt.initConfig({
    jshint: {
      files: watchFiles.serverJS
    },
    watch: {
      //files: ['<%= jshint.files %>'],
      files: watchFiles.serverJS,
      tasks: ['jshint'],
      options: {
        livereload: true
      }
    },
    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          nodeArgs: ['--debug'],
          ext: 'js,html',
          watch: watchFiles.serverJS
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
          'no-preload': true,
          'stack-trace-limit': 50,
          'hidden': []
        }
      }
    },
  });

  require('load-grunt-tasks')(grunt);
  grunt.option('force', true);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('build', ['jshint']);
};
