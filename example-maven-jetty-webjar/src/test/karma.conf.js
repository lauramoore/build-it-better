module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'bower_components/lib/angular/angular.js',
      'bower_components/lib/angular/angular-*.js',
      'bower_components/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
      'bower_components/lib/angular/angular-loader.js',
      'bower_components/lib/angular/*.min.js',
      'bower_components/lib/angular/angular-scenario.js'
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
