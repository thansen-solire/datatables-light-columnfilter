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
          'dist/dataTables.lightColumnFilter.min.js': ['src/dataTables.lightColumnFilter.js'],
          'dist/dataTables.lcf.datepicker.fr.min.js': ['src/dataTables.lcf.datepicker.fr.js'],
          'dist/dataTables.lcf.bootstrap3.min.js': ['src/dataTables.lcf.bootstrap3.js']
        }
      }
    },
    copy: {
      main: {
        src: 'src/dataTables.lightColumnFilter.js',
        dest: 'dist/dataTables.lightColumnFilter.js'
      },
      bootstrap3: {
        src: 'src/dataTables.lcf.bootstrap3.js',
        dest: 'dist/dataTables.lcf.bootstrap3.js'
      },
      datepicker: {
        src: 'src/dataTables.lcf.datepicker.fr.js',
        dest: 'dist/dataTables.lcf.datepicker.fr.js'
      }
    }
  });

  grunt.registerTask('default', ['uglify', 'copy']);
};
