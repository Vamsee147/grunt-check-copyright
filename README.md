# grunt-check-copyright

> Grunt plugin to check if copyright is present in files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-check-copyright --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-check-copyright');
```

## The "check_copyright" task

### Overview
In your project's Gruntfile, add a section named `check_copyright` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  check_copyright: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.copyrights
Type: `Array`
Default value: `[/(Copyright .*\. All Rights Reserved\.)/]`

An array containing the various copyrights to check in the list of files specified.

#### options.lines
Type: `Number`
Default value: `5`

A number value that is used to check a file first 'n' lines for the copyright.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever.  So if the `fixtures` folder has the files `fail.html`, `fail.js`, `pass.html` and `pass.js`, the file options only filters for the `js` files as per the pattern and the generated result in this case would be `fail.js` since this file doesn't have the copyright notice.

Note: Here we use the default options for lines and copyright as specified [here](#options).

```js
grunt.initConfig({
  check_copyright: {
    options: {
    },
    files: {
      'default_options': ['test/fixtures/*.js']
    }
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `fixtures` folder has the files `fail.html`, `fail.js`, `pass.html` and `pass.js`, the file options only filters for the `html` files as per the pattern and the generated result in this case would be `fail.html` since this file doesn't have the copyright notice.

Also, you can see that the `copyrights` array is trying to match two different format of copyright.

```js
grunt.initConfig({
  check_copyright: {
    options: {
      copyrights: [/(2016-2017 Company Limited,).*(XXXX, YYYY\. All Rights Reserved\.)/, /(2015-2016 Company Limited, XXXX, YYYY\. All Rights Reserved\.).*(The Company proprietary software program \(\"Program\"\), is protected by copyrights laws, international treaties and other pending or existing intellectual property rights in YYYY, ZZZZ and other countries\.).*(The Program may contain\/reference third party or open source components, the rights to which continue to ).*(remain with the applicable third party licensors or the open source community as the case may be and nothing ).*(here transfers the rights to the third party and open source components, except as expressly permitted\. ).*(Any unauthorized reproduction, storage, transmission in any form or by any means \(including without limitation to electronic, mechanical, printing, photocopying, recording or  otherwise\), or any distribution of this Program,or any portion of it, may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under the law\.)/],
      lines: 6
    },
    files: {
      'custom_options': ['test/fixtures/*.html']
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
