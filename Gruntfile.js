// Generated on 2014-08-28 using generator-webapp 0.4.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    uglify: {
      options: {
        preserveComments : 'some'
      },
      my_target: {
        files: {
          'dist/dataTables.columnFilter.min.js': ['src/dataTables.columnFilter.js'],
        }
      }
    }
  });

  grunt.registerTask('build', ['uglify', 'copy']);
};
