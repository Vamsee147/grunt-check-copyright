/**
 *
 * Copyright (c) 2018 vamsee. All Rights Reserved.
 *
 */

'use strict';
var path = require('path');
var exec = require('child_process').exec;
var execOptions = {
  cwd: path.join(__dirname, '..')
};

exports.tests = {
  default_options: function(test) {
		test.expect(2);
		exec('grunt check_copyright:default_options', execOptions, function(error, stdout) {
			test.equal(
				stdout.indexOf("test/fixtures/fail.js") !== -1,
				true,
				'Copyright fail file found in output.'
      );
      test.equal(
				stdout.indexOf("test/fixtures/pass.js") === -1,
				true,
				'Copyright pass file not found in output.'
			);
			test.done();
		});
  },

  custom_options: function(test) {
		test.expect(2);
		exec('grunt check_copyright:custom_options', execOptions, function(error, stdout) {
			test.equal(
				stdout.indexOf("test/fixtures/fail.html") !== -1,
				true,
				'Copyright fail file found in output.'
      );
      test.equal(
				stdout.indexOf("test/fixtures/pass.html") === -1,
				true,
				'Copyright pass file not found in output.'
			);
			test.done();
		});
	}
};