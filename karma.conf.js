module.exports = function (config) {
  config.set({
    basePath: '.',

    frameworks: [
      'jasmine',
      'browserify'
    ],

    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      '**/test/**/*.js': ['browserify']
    },

    browserify: {
      transform: ['babelify', 'istanbulify'],
      extensions: ['.js'],
      debug: true,  // make stack traces readable.
      bundleDelay: 1000  // WAR for karma-browserify race condition
    },

    reporters: ['progress', 'coverage'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,

    singleRun: true,
    port: 9876,
    browsers: ['PhantomJS'],

    coverageReporter: {type : 'text' }
  });
};
