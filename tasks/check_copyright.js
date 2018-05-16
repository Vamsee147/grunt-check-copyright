/*
 * grunt-check-copyright
 *
 *
 * Copyright (c) 2018 vamsee
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('check_copyright', 'Grunt plugin to check if copyright is present in files', function() {
    var done = this.async();
    var options = this.options({
      force: grunt.option('force') === true,
      copyrights: [/(Copyright .*\. All Rights Reserved\.)/],
      lines: 5
    });
    var files = this.files;

    var noCopyrightFiles = [];

    // Merge task-specific and/or target-specific options with these defaults.
    options['copyrights'] = grunt.option('copyrights') || options['copyrights'];
    options['lines'] = grunt.option('lines') || options['lines'];

    // check if there are files to test
    if (this.filesSrc.length === 0) {
      grunt.log.write('No files to check...');
      grunt.log.ok();
      return true;
    }

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (grunt.file.exists(filepath) && grunt.file.isFile(filepath)) {
          return true;
        } else {
          return false;
        }
      }).map(function(filepath) {
        // Read file source.
        var file = grunt.file.read(filepath).split("\r\n");
        var lines = file.slice(0, options.lines).join();
        var hasCopyright = false;
        options.copyrights.forEach(function (copyright) {
          if (copyright.test(lines)) {
            hasCopyright = true;
          }
        });
        if (!hasCopyright) {
          return filepath;
        } else {
          return;
        }
      }).filter(function(ele) {
        if (ele) {
          return true;
        } else {
          return false;
        }
      });

      // Print a success message.
      if (src.length > 0) {
        grunt.log.error(src.join(grunt.util.normalizelf('\n')));
        done(new Error());
      } else {
        grunt.log.ok('All files have copyright');
        done();
      }
    });
  });
};
