// Karma configuration
// Generated on Wed Apr 20 2016 11:58:09 GMT-0500 (Central Daylight Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-systemjs',
      'karma-sauce-launcher',
      'karma-chrome-launcher',
      'karma-ie-launcher'
    ],
    mime: {
      "text/x-typescript": ['ts']
    },

    systemjs: {
      serveFiles: [
        'node_modules/**/*.js',
        'dist/src/*.js',
        'src/*.ts'
      ],
      includeFiles: [
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/es6-shim/es6-shim.js'
      ],
      config: {
        defaultJSExtensions: true,
        paths: {
          systemjs: "node_modules/systemjs/dist/system.js",
          'system-polyfills': "node_modules/systemjs/dist/system-polyfills.js",
        },
        transpiler: null,
        map: {
          "angular2": "node_modules/angular2",
          "rxjs": "node_modules/rxjs",
        }
      }
    },

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'dist/src/*.spec.js', included: true },
    ],


    // list of files to exclude
    exclude: [
      'src/api.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'IE'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 5,

    browserNoActivityTimeout: 120000,
  });
  
  var args = process.argv.slice(2);
  var usingSauceLabs = process.env.TRAVIS || args.some(function(value){
    return value.match(/--sauce-creds/i);
  });
  
  if(usingSauceLabs){
    var sauceLabsConfig = require("./sauceLabs.conf");
    sauceLabsConfig(config);
  }
}