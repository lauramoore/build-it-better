module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      '../main/javascript/lib/angular/angular.js',
      '../main/javascript/lib/angular/angular-*.js',
      '../main/javascript/js/**/*.js',
      'javascript/unit/**/*.js'
    ],

    exclude : [
      '../main/javascript/lib/angular/angular-loader.js',
      '../main/javascript/lib/angular/*.min.js',
      '../main/javascript/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
