/*
 * grunt-check-copyright
 *
 *
 * Copyright (c) 2018 vamsee
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporterOutput: ""
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    check_copyright: {
      default_options: {
        options: {
        },
        files: {
          'default_options': ['test/fixtures/*.js']
        }
      },
      custom_options: {
        options: {
          copyrights: [/(2016-2017 Company Limited,).*(XXXX, YYYY\. All Rights Reserved\.)/, /(2015-2016 Company Limited, XXXX, YYYY\. All Rights Reserved\.).*(The Company proprietary software program \(\"Program\"\), is protected by copyrights laws, international treaties and other pending or existing intellectual property rights in YYYY, ZZZZ and other countries\.).*(The Program may contain\/reference third party or open source components, the rights to which continue to ).*(remain with the applicable third party licensors or the open source community as the case may be and nothing ).*(here transfers the rights to the third party and open source components, except as expressly permitted\. ).*(Any unauthorized reproduction, storage, transmission in any form or by any means \(including without limitation to electronic, mechanical, printing, photocopying, recording or  otherwise\), or any distribution of this Program,or any portion of it, may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under the law\.)/],
          lines: 6
        },
        files: {
          'custom_options': ['test/fixtures/*.html']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'check_copyright']);

};
