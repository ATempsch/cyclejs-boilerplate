module.exports = function (config) {
  config.set({
    basePath: '.',

    frameworks: [
      'jasmine'
    ],

    preprocessors: {
      '**/.tests/**/*.js': ['coverage']
    },

    files: [
      '.tests/**/*.js'
    ],

    reporters: ['progress', 'coverage'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,

    singleRun: true,
    port: 9876,
    browsers: ['PhantomJS'],

    coverageReporter: {
      type : 'text'
    }
  });
};
